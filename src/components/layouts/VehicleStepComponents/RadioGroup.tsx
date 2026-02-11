import React from "react";

interface RadioOption {
  label: string;
  value: string;
}

interface RadioGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  options: RadioOption[];
  error?: string;
}

export function RadioGroup({
  label,
  name,
  options,
  error,
  ...inputProps
}: RadioGroupProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] items-start mx-auto">
      <span className="text-sm font-medium text-gray-700 md:pt-1">{label}</span>

      <div className="flex gap-4">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              className="h-4 w-4 accent-gray-600"
              {...inputProps}
            />
            <span className="text-sm text-gray-700">{opt.label}</span>
          </label>
        ))}
      </div>

      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}
