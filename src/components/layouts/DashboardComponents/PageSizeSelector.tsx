interface PageSizeSelectProps {
  pageSize: number;
  onChange: (size: number) => void;
}

export function PageSizeSelect({ pageSize, onChange }: PageSizeSelectProps) {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600 justify-end">
      <span>Registros por página</span>
      <select
        value={pageSize}
        onChange={(e) => onChange(Number(e.target.value))}
        className="border border-slate-200 rounded-md px-2 py-1 bg-white cursor-pointer"
      >
        {options.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
    </div>
  );
}
