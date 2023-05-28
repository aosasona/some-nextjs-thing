import { default as colors } from "../lib/colors";

type ColorShadesEnum = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ColorShades {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type ColorsDefinition = Partial<ColorShades>;

export type DefaultColors = typeof colors;

export type ThemeColors = DefaultColors & {
  [x: string]: ColorsDefinition;
};

type Colors = keyof DefaultColors | (string & {});
export type ColorClass = `${Colors}.${ColorShadesEnum}`;
export type CustomColorClass = `${string}.${ColorShadesEnum}`;

export interface ColorModeColors {
  primary: ColorClass;
  secondary: ColorClass;
  bg: ColorClass;
  text: ColorClass;
}

export interface ThemeDefaults {
  colors: {
    light?: ColorModeColors;
    dark?: ColorModeColors;
  };
}

export interface Theme {
  colors: ThemeColors;
  defaults: ThemeDefaults;
  colorMode: "light" | "dark";
}
