import { ColorClass, CustomColorClass } from "./theme";

export type InputType = "text" | "email" | "password" | "number";

export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ColorProps {
	color: CustomColorClass;
	bg: CustomColorClass;
}

export interface FontProps {
	fontWeight: FontWeight;
	fontSize: number;
	fontFamily: string;
}

export interface MarginProps {
	mt: number;
	mb: number;
	ml: number;
	mr: number;
	mx: number;
	my: number;
}

export interface PaddingProps {
	pt: number;
	pb: number;
	pl: number;
	pr: number;
	px: number;
	py: number;
}

export interface BorderProps {
	borderWidth: number;
	borderTopWidth: number;
	borderBottomWidth: number;
	borderLeftWidth: number;
	borderRightWidth: number;
	borderColor: CustomColorClass | ColorClass;
	borderRadius: number;
}

export interface BaseProps
	extends Partial<FontProps>,
	Partial<ColorProps>,
	Partial<MarginProps>,
	Partial<PaddingProps> { }

export interface BoxProps extends BaseProps, Partial<BorderProps> { }
export interface ButtonProps extends BaseProps, Partial<BorderProps> { }
