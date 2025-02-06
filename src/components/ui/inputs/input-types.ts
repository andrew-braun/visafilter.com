export interface InputProps {
	id: string;
	label: string;
	orientation?: 'vertical' | 'horizontal';
	step?: number;
	type?: 'text' | 'number' | 'email' | 'password';
	value: string | number;
	onchange?: (value: any) => void;
}
