import { Theme } from "../types/theme";
import { default as defaultTheme } from "../lib/theme";
import { merge } from "../lib/object";
import { NestedPartial } from "../types/extended";

type ExtendedTheme = NestedPartial<Theme>;

export default function extendTheme(theme: ExtendedTheme): Theme {
  let extendedTheme: Partial<Theme> = {};

  for (let key in defaultTheme) {
    const castKey = key as keyof ExtendedTheme;
    if (typeof defaultTheme[castKey] != "object") {
      extendedTheme[castKey] =
        theme?.[castKey] || (defaultTheme?.[castKey] as any);
    } else {
      extendedTheme[castKey] = merge(
        defaultTheme[castKey],
        theme[castKey]
      ) as any;
    }
  }

  return extendedTheme as Theme;
}
