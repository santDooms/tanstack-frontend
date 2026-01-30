import { useQuotations } from "../../../hooks/useQuotations";
import { useAuthStore } from "../../../store";
import { Loader, Table } from "../../ui";
import { EmptyData } from "../EmptyData";

export function QuotationsTable() {
  const user = useAuthStore((s) => s.user);
  const { data, isLoading } = useQuotations(user!.brokerKey, 10);
  if (isLoading) return <Loader />;
  if (!data || data.items.length === 0) return <EmptyData />;

  return <Table data={data.items} />;
}
