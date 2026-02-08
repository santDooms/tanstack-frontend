import { useId } from "react";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
  className?: string;
};

export function Dropdown({
  label,
  options,
  value,
  onChange,
  error,
  disabled,
  className = "",
}: SelectProps) {
  const id = useId();
  const hasValue = value !== "";
  const hasError = !!error;

  return (
    <div className={`relative w-full ${className}`}>
      <select
        id={id}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className={`
          peer w-full appearance-none rounded-sm border bg-white px-3 pt-5 pb-2 text-sm
          focus:outline-none focus:ring-2 focus:ring-green-600
          ${hasError ? "border-red-500" : "border-gray-300"}
          ${disabled ? "bg-gray-100 cursor-not-allowed" : ""}
        `}
      >
        <option value="" disabled hidden></option>

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      <label
        htmlFor={id}
        className={`
          absolute left-3 bg-white px-1 transition-all duration-200
          ${
            hasValue
              ? "top-1 text-xs text-gray-600"
              : "top-3 text-sm text-gray-400 peer-focus:top-1 peer-focus:text-xs peer-focus:text-green-600"
          }
        `}
      >
        {label}
      </label>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
