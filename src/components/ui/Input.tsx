import type { ChangeEvent, FocusEvent } from "react";

interface InputProps {
	type: "text" | "number" | "email" | "password";
	label: string;
	id: string;
	value: string | number;
	name: string;
	placeholder: string;
	error: string | undefined;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
	type,
	label,
	id,
	value,
	name,
	placeholder,
	error,
	onChange,
	onBlur,
}: InputProps) => {
	return (
		<div className="flex flex-col space-y-2.5 mt-4 max-w-[309px]">
			<label
				htmlFor={id}
				className="text-xs text-secondary leading-3.5 font-medium"
			>
				{label}
			</label>
			<input
				type={type}
				id={name}
				value={value}
				name={name}
				placeholder={placeholder}
				onChange={onChange}
				onBlur={onBlur}
				aria-invalid={!!error}
				aria-describedby={error ? `${name}-error` : undefined}
				className="bg-[#eeeeee] text-black placeholder:text-secondary rounded-[10px] block w-full p-3 focus:outline-0 focus:ring-2 focus:ring-[#dddddd] font-medium"
			/>
			{error && <p className="text-sm text-red-500">{error}</p>}
		</div>
	);
};

export default Input;
