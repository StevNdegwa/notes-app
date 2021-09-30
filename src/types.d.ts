export interface CurrentWorkspace {
    name: string;
    wsRef: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            // "lottie-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            "lottie-player": any;
        }
    }
}