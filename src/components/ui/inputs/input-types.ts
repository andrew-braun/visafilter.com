export type BasicInputProps = {
	type: string;
	label: string;
	id: string;
	orientation?: "vertical" | "horizontal";
	disabled?: boolean;
	required?: boolean;
	class?: string;
};

export type TextInputProps = BasicInputProps & {
	type: "text";
	value?: string;
	placeholder?: string;
	pattern?: string;
	minlength?: number;
	maxlength?: number;
};

export type NumberInputProps = BasicInputProps & {
	type: "number";
	value?: number;
	min?: number;
	max?: number;
	onchange?: (event: Event) => void;
	placeholder?: string;
	showButtons?: boolean;
	step?: number;
};

export type InputProps = TextInputProps | NumberInputProps;
