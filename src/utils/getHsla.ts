export function getHsla(hsl: string): { hue: number; saturation: number; lightness: number; alpha: number } {
  let hslArr: string[] = hsl
    .substr(5)
    .split(')')[0]
    .split(',');

  let hue = parseInt(hslArr[0]),
    saturation: number = parseFloat(hslArr[1].substr(0, hslArr[1].length - 1)) / 100,
    lightness = parseFloat(hslArr[2].substr(0, hslArr[2].length - 1)) / 100,
    alpha = parseFloat(hslArr[3]);


  return { hue, saturation, lightness, alpha };
}
