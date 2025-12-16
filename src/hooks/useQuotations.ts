import { useQuery } from "@tanstack/react-query";
import { listQuotations } from "../api";


export function useQuotations(brokerKey: string, limit: number = 10, lastEvaluatedKey?: Record<string, unknown>) {
  return useQuery({
    queryKey: ["quotations", brokerKey, limit, lastEvaluatedKey],
    queryFn: () => listQuotations({ brokerKey, limit, lastEvaluatedKey }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
}
