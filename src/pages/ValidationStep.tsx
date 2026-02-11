import { useNavigate } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, Input } from "../components/ui";
import { Dropdown } from "../components/ui/DropDown";
import {
  validationStepSchema,
  type ValidationStepFormValues,
} from "../schemas/validationStep.schema";
import { selectIdTypes, selectPlateTypes } from "../utils/dropwDownOptions";
import { useCreateQuotation } from "../hooks/useQuotations";
import { useAuthStore } from "../store";
import { parseCreateQuoteRequest } from "../utils/parsers";

export function ValidationStep() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<ValidationStepFormValues>({
    mode: "onChange",
    resolver: zodResolver(validationStepSchema),
    defaultValues: {
      documentType: "cc",
      plateType: "particular",
    },
  });
  const user = useAuthStore((s) => s.user);
  const createQuotation = useCreateQuotation();
  const navigate = useNavigate();

  const handleFormSubmit = async (data: ValidationStepFormValues) => {
    if (!user) {
      navigate({ to: "/login" });
      return;
    }
    await createQuotation.mutateAsync(
      parseCreateQuoteRequest(data, user.brokerKey),
    );
    navigate({ to: "/newQuotationLayout/vehicleStep" });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div className="flex flex-col gap-14">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-bold text-blue-600">Comencemos</h1>
          <h2 className="text-lg text-gray-900">
            Ingresa la siguiente información para continuar con la cotización
          </h2>
          <h4 className="text-sm text-green-500 mt-1">
            Los campos * son obligatorios
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="w-full max-w-sm md:justify-self-end">
            <Dropdown
              label="Tipo de identificación *"
              options={selectIdTypes}
              error={errors.documentType?.message}
              {...register("documentType")}
            />
          </div>
          <div className="max-w-sm">
            <Input
              label="Número de identificación *"
              placeholder="Número de identificación *"
              error={errors.documentNumber?.message}
              {...register("documentNumber")}
            />
          </div>
          <div className="w-full max-w-sm md:justify-self-end">
            <Dropdown
              label="Tipo de placa *"
              options={selectPlateTypes}
              error={errors.plateType?.message}
              {...register("plateType")}
            />
          </div>
          <div className="max-w-sm">
            <Input
              label="Número de placa *"
              placeholder="Número de placa *"
              error={errors.plateNumber?.message}
              {...register("plateNumber", {
                onChange: (e) => {
                  const customVal = (
                    e.target as HTMLInputElement
                  ).value.toUpperCase();
                  setValue("plateNumber", customVal, {
                    shouldValidate: true,
                    shouldDirty: true,
                  });
                },
              })}
            />
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <Button
            type="submit"
            className="w-full max-w-sm min-h-11"
            disabled={!isValid}
          >
            Continuar
          </Button>
        </div>
      </div>
    </form>
  );
}
