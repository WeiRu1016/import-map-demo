
import { StyleProvider } from '@ant-design/cssinjs';
import React, { useRef } from "react";
import reactToWebComponent from "@r2wc/react-to-web-component";

function withStyleProvider<Props extends JSX.IntrinsicAttributes>(WrapperComponent: React.FunctionComponent<Props>) {
    const ContainerComponent = (props: Props) => {
        const ref = useRef(document.createElement('div'));
        return (
            <div ref={(node) => node?.appendChild(ref.current)}>
                <StyleProvider container={ref.current}>
                    <WrapperComponent {...props} />
                </StyleProvider>
            </div>
        );
    }

    return ContainerComponent;
}


export function factory<Props extends JSX.IntrinsicAttributes>(name: string, WrapperComponent: React.FunctionComponent<Props>, props?: Record<keyof Props, 'string' | 'number' | 'boolean' | 'function' | 'json'>){
    const Component = withStyleProvider<Props>(WrapperComponent);
    customElements.define(name, reactToWebComponent(Component, {
        shadow: "open",
        props,
    }));
}
