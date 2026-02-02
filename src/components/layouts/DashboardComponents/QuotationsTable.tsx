import { useState } from "react";
import { useQuotations } from "../../../hooks/useQuotations";
import { useAuthStore } from "../../../store";
import { Loader, Table } from "../../ui";
import { Pagination } from "../../ui/Pagination";
import { EmptyData } from "../EmptyData";
import { PageSizeSelect } from "./PageSizeSelector";

export function QuotationsTable() {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const user = useAuthStore((s) => s.user);
  const { data, isLoading } = useQuotations(user!.brokerKey, 50);
  const tableItems = data?.items || [];

  const totalPages = Math.ceil(tableItems.length / pageSize);

  const paginatedData = tableItems.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );// useMemo could be added here but not critical.

  if (isLoading) return <Loader />;
  if (!tableItems || tableItems.length === 0) return <EmptyData />;
  
  return (
    <div className="flex flex-col gap-4">
      <Table data={paginatedData} />
      <div className="grid grid-cols-3">
        <div />
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <PageSizeSelect pageSize={pageSize} onChange={setPageSize} />
      </div>
    </div>
  );
}
