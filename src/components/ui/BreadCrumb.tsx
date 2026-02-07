import { Link, useMatches } from "@tanstack/react-router";

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
      className="h-4 w-4 text-slate-400">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export function Breadcrumb() {
  const matches = useMatches();
  const matchesLength = matches.length;
  const items = matches
    .filter((match) => match.staticData?.breadcrumb)
    .map((match) => ({
      label: match.staticData.breadcrumb as string,
      to: match.pathname,
    }));
  const lastMatch = matches[matchesLength - 2];
  const virtualParent = lastMatch.staticData?.breadcrumbParent;

  if (virtualParent) {
    items.splice(- 1, 0, virtualParent);
  }

  return (
    <nav className="mb-2 flex items-center text-sm text-slate-500">
       {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;

        return (
          <div key={item.to} className="flex items-center">
            {index !== 0 && (
              <span className="mx-2">
                <ChevronRightIcon />
              </span>
            )}

            {isFirst && (
              <span className="text-slate-500 font-medium cursor-default">
                {item.label}
              </span>
            )}

            {!isFirst && !isLast && (
              <Link
                to={item.to}
                className="hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            )}

            {isLast && (
              <span className="text-blue-600 font-semibold cursor-default">
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </nav>
  );
}
