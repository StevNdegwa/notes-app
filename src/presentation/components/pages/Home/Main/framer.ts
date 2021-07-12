export const slideVariants = {
    list: {
        fromLogin: {
            x: [-50, 0]
        },
        fromEditor: {
            x: ["-100%", 0]
        },
        toEditorFromList: {
            x: "-100%"
        }
    },
    editor: {
        toEditorFromList: {
            x: ["-100%", 0]
        },
        toListFromEditor: {
            x: ["100%"]
        }
    }
}