import { FormProvider, useForm } from "react-hook-form";
import { QuotationInfoCard } from "../components/layouts/VehicleStepComponents/QuotationInfoCard";
import { VehicleForm } from "../components/layouts/VehicleStepComponents/VehicleForm";
import { Button, CheckboxField, Dropdown } from "../components/ui";
import { vehicleUses } from "../utils/dropwDownOptions";
import { vehicleStepSchema, type VehicleStepFormValues } from "../schemas/vehicleStep.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export function VehicleStep() {
  const methods = useForm<VehicleStepFormValues>({
    mode: "onChange",
    resolver: zodResolver(vehicleStepSchema)
  });
  const onSubmitForm = (data: VehicleStepFormValues) => { // check this submit, dont want the user to missuse the app when pressing enter.
    console.log(data);
  };
  return (
    <main>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmitForm)}>
          <section className="max-w-4xl mx-auto px-4 py-8 text-center flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-semibold text-blue-600">Vehículo</h1>
              <p className="text-gray-700">
                Ingresa y/o verifica la siguiente información del vehículo
              </p>
              <p className="text-sm text-cyan-600">
                Los campos con (*) son obligatorios
              </p>
            </div>
            <QuotationInfoCard plateNumber="ABC-434" plateType="Particular" />
            <Dropdown
              options={vehicleUses}
              label="Selecciona uso del vehiculo"
              {...methods.register("vehicleUse")}
            />
            <CheckboxField label="Manifiesto que entiendo que significa el uso del vehículo" {...methods.register("acceptCheck")} />
          </section>
          <VehicleForm />
          <div className="flex flex-row gap-36 justify-center pt-6">
            <Button type="submit" className="w-full max-w-64 min-h-11" disabled>
              Guardar y salir
            </Button>
            <Button type="submit" className="w-full max-w-64 min-h-11" disabled>
              Continuar
            </Button>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}
