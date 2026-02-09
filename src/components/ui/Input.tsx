import { useId, type InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className, ...props }: InputProps) {
  const id = useId();
  const resolvedPlaceholder = props.placeholder ?? " ";

  return (
    <div className="flex flex-col gap-1 relative">
      <input
        id={id}
        placeholder={resolvedPlaceholder}
        className={clsx(
          "peer rounded-sm border h-[50px] px-2.5 pb-3 pt-3.5  text-sm transition focus:outline-none focus:ring-2 autofill:shadow-[inset_0_0_0px_1000px_white]",
          error ? " border-red-500 focus:ring-0" : "border-gray-300 focus:ring-blue-500",
          className,
        )}
        {...props}
      />

      {label && (
        <label
          htmlFor={id}
          className={`
            absolute left-1.5 bg-white px-1 transition-all duration-200
            top-0.5 text-xs text-gray-600
            peer-placeholder-shown:top-0.5  peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:opacity-0
            peer-focus:top-0.5 peer-focus:text-xs
          `}
        >
          {label}
        </label>
      )}
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
