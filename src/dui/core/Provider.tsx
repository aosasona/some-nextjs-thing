import { createContext, ReactNode } from "react";
import { default as defaultTheme } from "../lib/theme";
import { Theme } from "../types/theme";

interface MyraProviderProps {
  children: ReactNode;
  theme?: Theme;
}

const MyraContext = createContext<Theme | null>(null);

function MyraProvider(props: MyraProviderProps) {
  let { theme } = props;
  if (!theme) {
    theme = defaultTheme;
  }

  return (
    <MyraContext.Provider value={{ ...theme }}>
      {props.children}
    </MyraContext.Provider>
  );
}

export { MyraContext, MyraProvider };
