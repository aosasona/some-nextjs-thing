import { ColorClass, ColorsDefinition, Theme } from "../types/theme";
import { useContext } from "react";
import { MyraContext } from "../core/Provider";
import { themeDefaults } from "../lib/theme";

export default function useColor(color?: ColorClass): string {
  const { colors: themeColors, defaults, colorMode } = useContext(MyraContext) as Theme;
  let hex: string;

  function getHex(target: ColorClass): string {
    if (target && target?.indexOf(".") >= 0) {
      const colorParts = target.split(".");
      const colorName = colorParts[0];
      const colorShade = parseInt(colorParts[1]) as keyof ColorsDefinition;
      let selectedHex = themeColors?.[colorName]?.[colorShade];
      if (!selectedHex || selectedHex == undefined) {
        selectedHex = getHex(defaults?.colors?.[colorMode]?.primary || themeDefaults?.colors?.[colorMode]!.primary);
      }
      return selectedHex;
    } else {
      return "";
    }
  }

  hex = getHex(color as any);

  return hex;
}
