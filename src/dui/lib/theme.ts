import { Theme, ThemeDefaults } from "../types/theme";
import defaultColors from "./colors";

export const themeDefaults = {
  colors: {
    light: {
      primary: "blue.600",
      secondary: "blue.100",
      bg: "dark.100",
      text: "dark.900",
    },
    dark: {
      primary: "blue.700",
      secondary: "blue.100",
      bg: "dark.900",
      text: "dark.100",
    },
  },
} as ThemeDefaults;

const theme: Theme = {
  colors: defaultColors,
  colorMode: "light",
  defaults: themeDefaults,
};

export default theme;
