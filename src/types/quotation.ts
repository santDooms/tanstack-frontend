export interface Quotation {
  policyId: string;
  createdAt: string;
  vigenciaDesde?: string;
  vigenciaHasta?: string;
  brokerKey: string;
  cedula: string;
  placa: string;
  nombre: string;
  vehiculo?: string;
  marca?: string;
  modelo?: string;
  valorPrima?: number;
  planName?: string;
  // [k: string]: unknown;
}

type PersonalData = {
  identification: string | null;
  identificationType: string | null;
  driverName?: string | null;
  brokerKey: string | null;
  [k: string]: unknown;
};

type VehicleData = {
  plate: string | null;
  plateType: string | null;
  model?: string | null;
  brand?: string | null;
  [k: string]: unknown;
};
export interface QuotationState {
  policyId: string | null;
  vigencyFrom: string | null;
  vigencyTo: string | null;
  createdAt: string | null;
  personalData: PersonalData;
  vehicleData: VehicleData;
  setQuotation: (quotation: initialQuotationState) => void;
}

export type initialQuotationState = Omit<QuotationState, "setQuotation">;
