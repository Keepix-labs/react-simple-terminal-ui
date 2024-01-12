import { ReactNode } from "react";
declare const Frames: {
    readonly None: "None";
    readonly Win98: "Win98";
    readonly MacOs: "MacOs";
    readonly GnomeUbuntu: "GnomeUbuntu";
};
type Frames = typeof Frames[keyof typeof Frames];
type TerminalUiProps = {
    style?: object;
    title?: string;
    initialFeed?: Array<string | ReactNode>;
    className?: string;
    recordClassName?: string;
    onCommand: (cmd: string) => Promise<string>;
    prompt?: string;
    commandNotFoundMessage?: (cmd: string) => string;
    blinkerComponent?: ReactNode;
    blinkerChar?: string;
    frame?: Frames;
};
declare const TerminalUi: ({ style, initialFeed, className, title, onCommand, prompt, recordClassName, commandNotFoundMessage, blinkerComponent, blinkerChar, frame }: TerminalUiProps) => JSX.Element;
export default TerminalUi;
