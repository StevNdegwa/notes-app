import { radialGradient } from "polished";

export const loadVariant = {
    wrapper: {
        light: {
            ...radialGradient({
                colorStops: ['white 0%', '#0a0a33 50%', '#0a0a33 95%'],
                extent: 'farthest-corner at 45px 45px',
                position: 'center',
                shape: 'ellipse',
            })
        }

    }
}