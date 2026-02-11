import { type InputHTMLAttributes } from "react";

interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const CheckboxField = ({
  label,
  disabled = false,
  ...props
}: CheckboxFieldProps) => {
  return (
    <label
      className={`flex items-start gap-3 text-sm leading-relaxed ${
        disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        disabled={disabled}
        className="mt-1 h-4 w-4 accent-gray-600 disabled:cursor-not-allowed"
        {...props}
      />
      <span className="text-gray-600">{label}</span>
    </label>
  );
};
