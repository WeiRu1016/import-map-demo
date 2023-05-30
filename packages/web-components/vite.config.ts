/* eslint-disable @typescript-eslint/ban-ts-comment */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glob from 'glob';
import path from 'path';
// @ts-ignore
import packageJSON from './package.json';
import { fileURLToPath } from 'node:url';
// @ts-ignore
import { importMapPlugin } from '../../vite-plugins/import-maps'

const entry = glob.sync('./src/components/*/index.tsx').map(file => [
    path.relative(
        'src',
        file.slice(0, file.length - path.extname(file).length)
    ),
    fileURLToPath(new URL(file, import.meta.url))
]) as Array<[string, string]>;

export default () => {
    return defineConfig({
        plugins: [react(), importMapPlugin({ packageName: packageJSON.name })],
        base: '/web-components/',
        define: {
            global: "globalThis",
            // my fix
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "globalThis.process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        },
        build: {
          manifest: true,
          minify: false,
          outDir: '../../dist/web-components',
          lib: {
            entry: Object.fromEntries(entry),
            formats: ['es'],
            fileName: '[name].[hash].js',
          },
        },
      })
}
