import { z } from "zod";

export const documentTypeEnum = z.enum(["cc", "ce", "passport"]);
export const plateTypeEnum = z.enum(["particular", "publico"]);

export const validationStepSchema = z
  .object({
    documentType: documentTypeEnum,
    documentNumber: z.string().min(1, "Document number is required"),
    plateType: plateTypeEnum,
    plateNumber: z
      .string()
      .min(6, "Plate number must be at least 6 characters")
      .max(7, "Plate number must be at most 7 characters"),
  })
  .superRefine((data, ctx) => {
    const { documentType, documentNumber } = data;
    if (documentType === "cc" || documentType === "ce") {
      if (!/^\d+$/.test(documentNumber)) {
        ctx.addIssue({
          code: "custom",
          message: "Document must contain only numbers",
          path: ["documentNumber"],
        });
      }

      if (documentNumber.length < 6 || documentNumber.length > 10) {
        ctx.addIssue({
          code: "custom",
          message: "Document must be between 6 and 10 digits",
          path: ["documentNumber"],
        });
      }
    }

    if (documentType === "passport") {
      if (!/^[a-zA-Z0-9]+$/.test(documentNumber)) {
        ctx.addIssue({
          code: "custom",
          message: "Passport must contain only letters and numbers",
          path: ["documentNumber"],
        });
      }

      if (documentNumber.length < 6 || documentNumber.length > 12) {
        ctx.addIssue({
          code: "custom",
          message: "Passport must be between 6 and 12 characters",
          path: ["documentNumber"],
        });
      }
    }
  });

export type ValidationStepFormValues = z.infer<typeof validationStepSchema>;
