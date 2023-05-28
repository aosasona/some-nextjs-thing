import { BaseProps, InputType } from "./types/props";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import useStyle from "./hooks/useStyle";

interface Props extends BaseProps {
	name: string;
	type?: InputType;
	placeholder?: string;
	label?: string;
	required?: boolean;
}

export default function Input(props: Props) {
	const style = useStyle(props);

	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	return (
		<div className="transition-all" style={style}>
			{props?.label ? (
				<label htmlFor={props.name} className={"block font-medium text-sm px-0.5 mb-1 transition-all " + (isFocused ? "text-indigo-600" : "")}>
					{props?.label}
				</label>
			) : null}

			<div className="relative w-full">
				<input
					type={showPassword ? "text" : props?.type || "text"}
					name={props.name}
					id={props.name}
					placeholder={props?.placeholder || ""}
					className="py-2.5 px-3 w-full text-base rounded-md border lg:text-sm focus:border-indigo-600 focus:outline-none border-stone-300"
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					required={props.required}
				/>
				{props?.type == "password" ? (
					<button
						type="button"
						onClick={() => setShowPassword(!showPassword)}
						className={
							"h-full aspect-square bg-stone-100 hover:bg-stone-300 flex items-center justify-center absolute right-0 top-0 border rounded-r-md z-10 transition-all " +
							(isFocused ? "border-indigo-600" : "border-stone-300 ")
						}>
						{!showPassword ? <BsEye size={16} /> : <BsEyeSlash size={16} />}
					</button>
				) : null}
			</div>
		</div>
	);
}
