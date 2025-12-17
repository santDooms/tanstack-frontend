import { useQuotations } from "../../hooks/useQuotations";
import { useAuthStore } from "../../store";
import { Loader, Table } from "../ui";

export function CotizacionesTable() {
  const user = useAuthStore((s) => s.user);
  const { data, isLoading } = useQuotations(user!.brokerKey, 10);
  console.log("data useq", isLoading);
  if (isLoading) return <Loader />;

  return <Table data={data?.items ?? []} />;
}
