import { FC, createElement } from "react";

export const WebComponentContainer: FC<{ name: string; props?: any }> = ({ name, props }) => {
    return createElement(name, { ...props, is: name });
}