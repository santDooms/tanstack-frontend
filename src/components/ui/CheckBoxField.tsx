import { type InputHTMLAttributes } from "react";

interface CheckboxFieldProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
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
        className={`
            mt-1 h-4 w-4 shrink-0
            appearance-none rounded-sm
            border border-[#919191] bg-white
            grid place-content-center
            before:content-[''] before:w-3.5 before:h-3.5
            before:scale-0 before:transition-transform
            before:origin-center
            before:[clip-path:polygon(20%_55%,10%_65%,45%_100%,100%_25%,90%_15%,45%_75%)]
            before:bg-[#333333]
            checked:before:scale-100

            disabled:bg-[#e6e6e6] disabled:border-neutral-300
            disabled:cursor-not-allowed
          `}
        {...props}
      />
      <span className="text-gray-700">{label}</span>
    </label>
  );
};
