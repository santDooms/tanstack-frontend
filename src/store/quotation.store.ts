import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { initialQuotationState, QuotationState } from "../types/quotation";

const intialState: initialQuotationState = {
  createdAt: null,
  policyId: null,
  vigencyFrom: null,
  vigencyTo: null,
  personalData: {
    identification: null,
    identificationType: null,
    driverName: null,
    brokerKey: null,
  },
  vehicleData: {
    plate: null,
    plateType: null,
    model: null,
    brand: null,
  },
};

export const useQuotationStore = create<QuotationState>()(
  devtools(
    persist(
      (set) => ({
        ...intialState,
        setQuotation: (quotation: initialQuotationState) =>
          set({ ...quotation }, false, "createQuotation/setQuotation"),
      }),
      {
        name: "quotation-storage",
      },
    ),
    { name: "Quotation Store", enabled: import.meta.env.DEV },
  ),
);
