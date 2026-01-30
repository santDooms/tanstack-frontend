export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function ChevronRightIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-slate-400"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}


export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-2 flex items-center text-sm text-slate-500">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {index !== 0 && (
            <span className="mx-2">
              <ChevronRightIcon />
            </span>
          )}

          {item.href ? (
            <a
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-slate-700 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
