import { Variable } from '@tamagui/core';
declare type ColorsByName = {
    [key: string]: Record<string, string>;
};
declare type ColorsList = string[];
declare type GeneratedTheme = {
    backgroundStrong: Variable<string>;
    background: Variable<string>;
    backgroundSoft: Variable<string>;
    backgroundHover: Variable<string>;
    backgroundPress: Variable<string>;
    backgroundFocus: Variable<string>;
    backgroundTransparent: Variable<string>;
    color: Variable<string>;
    colorHover: Variable<string>;
    colorPress: Variable<string>;
    colorFocus: Variable<string>;
    colorTranslucent: Variable<string>;
    colorMid: Variable<string>;
    shadowColor: Variable<string>;
    shadowColorHover: Variable<string>;
    shadowColorPress: Variable<string>;
    shadowColorFocus: Variable<string>;
    borderColor: Variable<string>;
    borderColorHover: Variable<string>;
    borderColorPress: Variable<string>;
    borderColorFocus: Variable<string>;
    color1: Variable<string>;
    color2: Variable<string>;
    color3: Variable<string>;
    color4: Variable<string>;
    color5: Variable<string>;
    color6: Variable<string>;
    color7: Variable<string>;
    color8: Variable<string>;
    color9: Variable<string>;
    color10: Variable<string>;
    color11: Variable<string>;
    color12: Variable<string>;
};
export declare const createThemes: <C extends string>({ activeColor, light, dark, colorsLight, colorsDark, }: {
    activeColor: string;
    light: ColorsList;
    dark: ColorsList;
    colorsLight: ColorsByName;
    colorsDark: ColorsByName;
}) => { [key in C | "light" | "dark"]: GeneratedTheme; };
export {};
//# sourceMappingURL=createThemes.d.ts.map