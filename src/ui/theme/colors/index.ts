export const colors = {
    primary: [
        "hsla(216, 65%, 95%, 1)",
        "hsla(213, 29%, 85%, 1)",
        "hsla(212, 25%, 75%, 1)",
        "hsla(212, 25%, 65%, 1)",
        "hsla(213, 25%, 55%, 1)",
        "hsla(212, 25%, 45%, 1)",
        "hsla(212, 25%, 35%, 1)",
        "hsla(211, 26%, 25%, 1)",
        "hsla(210, 29%, 15%, 1)",
        "hsla(203, 67%, 5%, 1)"
    ],
    secondary: [
        "hsla(197, 100%, 94%, 1)",
        "hsla(203, 79%, 85%, 1)",
        "hsla(204, 72%, 75%, 1)",
        "hsla(204, 70%, 65%, 1)",
        "hsla(204, 68%, 55%, 1)",
        "hsla(205, 66%, 46%, 1)",
        "hsla(204, 70%, 35%, 1)",
        "hsla(203, 76%, 24%, 1)",
        "hsla(202, 94%, 14%, 1)",
        "hsla(206, 100%, 5%, 1)"
    ],
    tertiary: [
        "hsla(34, 100%, 93%, 1)",
        "hsla(28, 100%, 85%, 1)",
        "hsla(29, 94%, 75%, 1)",
        "hsla(28, 93%, 65%, 1)",
        "hsla(28, 92%, 55%, 1)",
        "hsla(28, 92%, 45%, 1)",
        "hsla(28, 94%, 35%, 1)",
        "hsla(28, 97%, 25%, 1)",
        "hsla(28, 100%, 15%, 1)",
        "hsla(18, 100%, 6%, 1)"
    ],
    success: [
        "hsla(171, 89%, 93%, 1)",
        "hsla(166, 70%, 84%, 1)",
        "hsla(166, 66%, 75%, 1)",
        "hsla(167, 64%, 64%, 1)",
        "hsla(166, 63%, 55%, 1)",
        "hsla(166, 63%, 45%, 1)",
        "hsla(166, 68%, 34%, 1)",
        "hsla(167, 75%, 23%, 1)",
        "hsla(168, 100%, 12%, 1)",
        "hsla(162, 100%, 5%, 1)"
    ],
    error: [
        "hsla(354, 100%, 94%, 1)",
        "hsla(357, 100%, 85%, 1)",
        "hsla(356, 100%, 75%, 1)",
        "hsla(356, 99%, 65%, 1)",
        "hsla(358, 98%, 56%, 1)",
        "hsla(358, 92%, 47%, 1)",
        "hsla(357, 96%, 36%, 1)",
        "hsla(356, 100%, 25%, 1)",
        "hsla(358, 100%, 15%, 1)",
        "hsla(0, 100%, 6%, 1)"
    ],
    warning: [
        "hsla(48, 100%, 93%, 1)",
        "hsla(45, 93%, 84%, 1)",
        "hsla(44, 92%, 75%, 1)",
        "hsla(44, 90%, 65%, 1)",
        "hsla(44, 90%, 55%, 1)",
        "hsla(44, 90%, 45%, 1)",
        "hsla(44, 94%, 34%, 1)",
        "hsla(45, 98%, 24%, 1)",
        "hsla(44, 100%, 15%, 1)",
        "hsla(40, 100%, 5%, 1)"
    ],
    grey: [
        "hsla(0, 0%, 95%, 1)",
        "hsla(0, 0%, 85%, 1)",
        "hsla(0, 0%, 75%, 1)",
        "hsla(0, 0%, 65%, 1)",
        "hsla(0, 0%, 55%, 1)",
        "hsla(0, 0%, 45%, 1)",
        "hsla(0, 0%, 35%, 1)",
        "hsla(0, 0%, 25%, 1)",
        "hsla(0, 0%, 15%, 1)",
        "hsla(0, 0%, 5%, 1)"
    ],
    dark: "hsla(240, 66%, 12%, 1)",
    light: "hsla(0, 0%, 98%, 1)",
    transparent: "transparent"
}


export type Colors = typeof colors;
export type ColorsType = keyof Colors;
export type ColorsIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;