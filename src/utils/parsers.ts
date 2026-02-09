import type { ValidationStepFormValues } from "../schemas/validationStep.schema";
import {
  CreateQuotationResponseSchema,
  type CreateQuotationPayload,
  type CreateQuotationResponse,
} from "../types/api";
import type { initialQuotationState } from "../types/quotation";

export function parseCreateQuoteResponse(
  response: CreateQuotationResponse,
): initialQuotationState {
  const parsedResponse = CreateQuotationResponseSchema.safeParse(response);
  if (!parsedResponse.success) {
    throw new Error("Invalid response format");
  }
  return {
    createdAt: response.createdAt || null,
    policyId: response.policyId || null,
    vigencyFrom: response.vigenciaDesde || null,
    vigencyTo: response.vigenciaHasta || null,

    personalData: {
      identification: response.cedula || null,
      identificationType: response.tipoIdentificacion || null,
      driverName: response.nombre || null,
      brokerKey: response.brokerKey || null,
    },

    vehicleData: {
      plate: response.placa || null,
      plateType: response.tipoPlaca || null,
      model: response.modelo || null,
      brand: response.marca || null,
    },
  };
}

export function parseCreateQuoteRequest(
  formData: ValidationStepFormValues,
  brokerKey: string,
): CreateQuotationPayload {
  const { documentNumber, documentType, plateNumber, plateType } = formData;
  return {
    brokerKey,
    cedula: documentNumber,
    tipoIdentificacion: documentType,
    placa: plateNumber,
    tipoPlaca: plateType,
  };
}
