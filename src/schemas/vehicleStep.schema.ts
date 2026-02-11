import { z } from "zod";

export const vehicleUseEnum = z.enum(["0", "1", "2"]);

const requiredString = (message = "This field is required") =>
  z.string().min(1, message);

const alphaNumericString = (message = "Only letters and numbers allowed") =>
  z
    .string()
    .min(1, "This field is required")
    .regex(/^[A-Za-z0-9]+$/, message);

export const vehicleStepSchema = z.object({
  vehicleUse: vehicleUseEnum,
  acceptCheck: z.boolean(),
  vehicleCode: alphaNumericString(),
  brand: alphaNumericString(),
  model: requiredString(),
  version: requiredString(),
  type: requiredString(),
  brandCode: alphaNumericString(),
  commercialValue: z.number().min(1, "this field is required"),
  isNew: z.enum(["yes", "no"]),
  hasAccessories: z.enum(["yes", "no"]),
  hasGps: z.enum(["yes", "no"]),
});

export type VehicleStepFormValues = z.infer<typeof vehicleStepSchema>;
