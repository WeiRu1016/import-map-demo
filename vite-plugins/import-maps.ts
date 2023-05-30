import { ResolvedConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export function importMapPlugin({ packageName }: { packageName: string }) {
  let viteConfig: ResolvedConfig;
  return {
    name: 'vite-import-map',

    configResolved(resolvedConfig: ResolvedConfig) {
        viteConfig = resolvedConfig;
    },

    async closeBundle() {
        const outDir = viteConfig.build.outDir;
        const manifest = typeof viteConfig.build.manifest === 'string' ? viteConfig.build.manifest : 'manifest.json';

        const jsonContent = JSON.parse(
            fs.readFileSync(path.join(outDir, manifest), { encoding: "utf8" })
          );

        const map = {} as Record<string, string>;

        Object.keys(jsonContent).forEach((key) => {
            if (jsonContent[key].isEntry) {
                const dir = path.dirname(key).split('/');
                const name = dir.slice(-1)[0];
                map[`${packageName}/${name}`] = path.join(viteConfig.base, jsonContent[key].file);
            }
        });

        const content = `(function(){
            const im = document.createElement('script');
            im.type = 'importmap';
            im.textContent = ${JSON.stringify(JSON.stringify({
                imports: map
            }))};
            document.currentScript.after(im);
        })()`
        
        fs.writeFileSync(
            path.join(outDir, './import-map.js'),
            content,
        );
    }
  }
}
