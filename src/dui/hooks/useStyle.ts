import { defaultBorderProps, defaultMarginProps, defaultPaddingProps } from "../lib/props";
import { BaseProps } from "../types/props";
import useColor from "./useColor";

export default function useStyle<T extends BaseProps>(props: T) {
	const borderColor = useColor((props as any)?.borderColor || defaultBorderProps?.borderColor);

	return {
		...defaultBorderProps,

		marginTop: props?.my || props?.mt || defaultMarginProps?.my || defaultMarginProps?.mt,
		marginBottom: props?.my || props?.mb || defaultMarginProps?.my || defaultMarginProps?.mb,
		marginLeft: props?.mx || props?.ml || defaultMarginProps?.mx || defaultMarginProps?.ml,
		marginRight: props?.mx || props?.mr || defaultMarginProps?.mx || defaultMarginProps?.mr,

		paddingTop: props?.py || props?.pt || defaultPaddingProps?.py || defaultPaddingProps?.pt,
		paddingBottom: props?.py || props?.pb || defaultPaddingProps?.py || defaultPaddingProps?.pt,
		paddingLeft: props?.px || props?.pl || defaultPaddingProps?.px || defaultPaddingProps?.pl,
		paddingRight: props?.px || props?.pr || defaultPaddingProps?.px || defaultPaddingProps?.pl,

		borderColor,
		...props,
	} as const;
}
