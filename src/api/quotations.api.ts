import api from "../lib/axios";
import type {
  CreateQuotationPayload,
  CreateQuotationResponse,
} from "../types/api";
import type { Quotation } from "../types/quotation";

export type ListPayload = {
  brokerKey: string;
  lastEvaluatedKey?: Record<string, any>;
  limit?: number;
};

export type QuotationsResponse = {
  items: Quotation[];
  lastEvaluatedKey?: Record<string, unknown> | null;
};

export const listQuotations = (payload: ListPayload) =>
  api
    .post<QuotationsResponse>("/list_quotations", payload)
    .then((res) => res.data);

export const createQuotationRequest = (
  payload: CreateQuotationPayload,
): Promise<CreateQuotationResponse> => {
  return api
    .post<CreateQuotationResponse>("/new_quotation", payload)
    .then((response) => response.data);
};
