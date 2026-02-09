import { useQuery } from "@tanstack/react-query";
import { createQuotationRequest, listQuotations } from "../api";
import { useApiMutation } from "./useApiMutation";
import { useQuotationStore } from "../store/quotation.store";
import { parseCreateQuoteResponse } from "../utils/parsers";

export function useListQuotations(
  brokerKey: string,
  limit: number = 10,
  lastEvaluatedKey?: Record<string, unknown>,
) {
  return useQuery({
    queryKey: ["quotations", brokerKey, limit, lastEvaluatedKey],
    queryFn: () => listQuotations({ brokerKey, limit, lastEvaluatedKey }),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    retry: false,
  });
}

export const useCreateQuotation = () => {
  const setQuotation = useQuotationStore((s) => s.setQuotation);
  return useApiMutation(createQuotationRequest, {
    onSuccess: (data) => {
      try {
        const parsedData = parseCreateQuoteResponse(data);
        setQuotation(parsedData);
      } catch (error) {
        console.log("Failed to parsed data from response", error);
      }
    },
  });
};
