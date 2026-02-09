import { z } from 'zod';

const loginResponseSchema = z.object({
  token: z.string(),
  user: z.object({
    id: z.string(),
    email: z.email(),
    name: z.string(),
    role: z.enum(["user", "admin", "broker"]),
    brokerKey: z.string(),
  }),
});

export type LoginResponse = z.infer<typeof loginResponseSchema>;

export type LoginPayload = {
  email: string;
  password: string;
};

export type CreateQuotationPayload = {
  brokerKey: string;
  cedula: string;
  tipoIdentificacion: "cc" | "ce" | "passport";
  placa: string;
  tipoPlaca: "particular" | "publico";
};

export const CreateQuotationResponseSchema = z.object({
  policyId: z.string(),
  cedula: z.string(),
  placa: z.string(),
  brokerKey: z.string(),
  createdAt: z.string(),
  vigenciaDesde: z.string(),
  vigenciaHasta: z.string(),
  nombre: z.string(),
  vehiculo: z.string(),
  marca: z.string(),
  modelo: z.string(),
  valorPrima: z.number(),
  tipoPlaca: z.string(),
  tipoIdentificacion: z.string(),
});

export type CreateQuotationResponse = z.infer<typeof CreateQuotationResponseSchema>;
