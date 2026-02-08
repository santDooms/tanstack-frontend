import { useId, type InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hasValue?: boolean;
}

export function Input({ label, error, hasValue, className, ...props }: InputProps) {
  const id = useId();
  return (
    <div className="flex flex-col gap-1 relative">
      <input
        id={id}
        className={clsx(
          "rounded-sm border h-[50px] px-2.5 py-3 text-sm transition focus:outline-none focus:ring-2 autofill:shadow-[inset_0_0_0px_1000px_white]",
          error
            ? " border-red-500 focus:ring-0"
            : "border-gray-300 focus:ring-blue-500",
          className,
        )}
        {...props}
      />

      {label && (hasValue || props.value) && (
        <label htmlFor={id} className="absolute top-0.5 left-2.5 transition-all text-xs font-medium text-gray-500">{label}</label>
      )}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
