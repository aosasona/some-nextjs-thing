import { BorderProps, ColorProps, FontProps, MarginProps, PaddingProps } from "../types/props";

export const defaultFontProps: FontProps = {
	fontSize: 16,
	fontFamily: "Arial",
	fontWeight: 500,
};

export const defaultColorProps: ColorProps = {
	bg: "dark.900",
	color: "dark.100",
};

export const defaultMarginProps: MarginProps = {
	mt: 0,
	mb: 0,
	mr: 0,
	ml: 0,
	mx: 0,
	my: 0,
};

export const defaultPaddingProps: PaddingProps = {
	pt: 0,
	pb: 0,
	pr: 0,
	pl: 0,
	px: 2,
	py: 12,
};

export const defaultBorderProps: BorderProps = {
	borderWidth: 0,
	borderTopWidth: 0,
	borderBottomWidth: 0,
	borderLeftWidth: 0,
	borderRightWidth: 0,
	borderColor: "dark.900",
	borderRadius: 5,
};
