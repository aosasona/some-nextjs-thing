import { useState } from "react";
import useColor from "./hooks/useColor";
import { useDefaultColors } from "./hooks/useDefaultColors";
import useStyle from "./hooks/useStyle";
import { ButtonProps } from "./types/props";

interface Props extends ButtonProps {
  title: string;
  type?: "submit" | "button";
  description?: string;
  onClick?: (...args: any[]) => any;
}

export default function Button(props: Props) {
  const [hovered, setHovered] = useState(false);
  const style = useStyle(props);

  const customBg = useColor(props?.bg);
  const customColor = useColor(props?.color);
  const { primary, secondary, text } = useDefaultColors();

  return (
    <button
      type={props?.type || "button"}
      title={props?.description || props.title}
      onClick={props?.onClick || (() => null)}
      className={`w-full text-sm hover:scale-95 py-3 px-6 transition-all`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...style,
        background: hovered ? secondary : customBg || primary,
        color: customColor || text,
      }}
    >
      {props.title}
    </button>
  );
}
