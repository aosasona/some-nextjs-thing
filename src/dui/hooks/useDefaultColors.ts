import { useContext, useEffect, useState } from "react";
import { MyraContext } from "../core/Provider";
import { themeDefaults } from "../lib/theme";
import useColor from "./useColor";

export function useDefaultColors() {
  const ctx = useContext(MyraContext);
  const [defaultColors, setDefaultColors] = useState({
    primary: "",
    secondary: "",
    bg: "",
    text: "",
  });

  const colorMode = ctx?.colorMode || "light";
  const defaults = ctx?.defaults || themeDefaults;

  const primaryColor = defaults.colors[colorMode]?.primary;
  const secondaryColor = defaults.colors[colorMode]?.secondary;
  const bgColor = defaults.colors[colorMode]?.bg;
  const textColor = defaults.colors[colorMode]?.text;

  const primary = useColor(primaryColor);
  const secondary = useColor(secondaryColor);
  const bg = useColor(bgColor);
  const text = useColor(textColor);

  useEffect(() => {
    setDefaultColors((prev) => ({
      ...(prev as any),
      primary,
      secondary,
      bg,
      text,
    }));
  }, [primary, secondary, bg, text]);

  return defaultColors;
}
