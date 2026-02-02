interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center disabled:opacity-40"
      >
        ‹
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-9 w-9 rounded-md text-sm font-medium transition
            ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "border border-slate-200 text-slate-700 hover:bg-slate-50"
            }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}
