import { useFormContext } from "react-hook-form";
import { Input } from "../../ui";
import { RadioGroup } from "./RadioGroup";
import { type VehicleFormValues } from "../../../pages/VehicleStep";

export function VehicleForm() {
  const { register } = useFormContext<VehicleFormValues>();
  return (
    <section>
      <div className="text-center bg-gray-100 py-14">
        <h2 className="text-3xl font-semibold text-blue-600">
          Datos del Vehículo
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-6 pt-7">
          <Input
            label="Código del vehículo *"
            placeholder="Código del vehículo *"
            disabled={true}
            {...register("vehicleCode")}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <Input
              label="Marca *"
              placeholder="Marca *"
              disabled={true}
              {...register("brand")}
            />
            <Input
              label="Modelo *"
              placeholder="Modelo *"
              disabled={true}
              {...register("model")}
            />
            <Input
              label="Version *"
              placeholder="Version *"
              disabled={true}
              {...register("version")}
            />
            <Input
              label="Tipo *"
              placeholder="Tipo *"
              disabled={true}
              {...register("type")}
            />
            <Input
              label="Codigo marca *"
              placeholder="Codigo marca *"
              disabled={true}
              {...register("brandCode")}
            />
            <Input
              label="Valor comercial *"
              placeholder="Valor comercial *"
              disabled={true}
              {...register("commercialValue")}
            />
          </div>
        </div>
      </div>
      <div className="bg-white py-8 flex flex-col gap-6">
        <h2 className="text-3xl text-center font-semibold text-blue-600">
          Información adicional del Vehículo
        </h2>
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <RadioGroup
            label="¿El vehículo es 0 km?"
            options={[
              { label: "Sí", value: "yes" },
              { label: "No", value: "no" },
            ]}
            {...register("isNew")}
            //error={errors.isZeroKm && "Selecciona una opción"}
          />

          <RadioGroup
            label="¿Tiene accesorios adicionales?"
            options={[
              { label: "Sí", value: "yes" },
              { label: "No", value: "no" },
            ]}
            {...register("hasAccessories")}
            //error={errors.hasAccessories && "Selecciona una opción"}
          />

          <RadioGroup
            label="¿Cuenta con dispositivo satelital?"
            options={[
              { label: "Sí", value: "yes" },
              { label: "No", value: "no" },
            ]}
            {...register("hasGps")}
            //error={errors.hasSatelliteDevice && "Selecciona una opción"}
          />
        </div>
      </div>
    </section>
  );
}
