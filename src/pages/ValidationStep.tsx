import { useNavigate, type NavigateOptions } from "@tanstack/react-router";
import { useForm, Controller } from "react-hook-form";
import { Button, Input } from "../components/ui";
import { Dropdown } from "../components/ui/DropDown";

type ValidationFormValues = {
  idType: string;
  idNumber: string;
  plateType: string;
  plateNumber: string;
};

export function ValidationStep() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate({ to: "/dashboard" } as NavigateOptions);
  };
  return (
    <div className="flex flex-col gap-14">
      <div className="flex justify-end">
        <Button className=" w-full max-w-48 min-h-11" onClick={handleButtonClick}>Ir a mis negocios</Button>
      </div>
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
            options={[
              { label: "Cédula de ciudadanía", value: "cc" },
              { label: "Cédula de extranjería", value: "ce" },
              { label: "Pasaporte", value: "pasaporte" },
            ]}
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="max-w-sm">
          <Input
            label="Número de identificación *"
            placeholder="Número de identificación *"
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="w-full max-w-sm md:justify-self-end">
          <Dropdown
            label="Tipo de placa *"
            options={[
              { label: "Particular", value: "particular" },
              { label: "Público", value: "publico" },
              { label: "Diplomático", value: "diplomatico" },
            ]}
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="max-w-sm">
          <Input label="Número de placa *" placeholder="Número de placa *" value="" onChange={() => {}} />
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <Button className="w-full max-w-sm min-h-11">Continuar</Button>
      </div>
    </div>
  );
}
