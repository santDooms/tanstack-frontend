type OptionType = {
  label: string;
  value: string;
}

export const selectIdTypes: OptionType[] = [
  { label: "Cédula de ciudadanía", value: "cc" },
  { label: "Cédula de extranjería", value: "ce" },
  { label: "Pasaporte", value: "passport" },
];

export const selectPlateTypes: OptionType[] = [
  { label: "Particular", value: "particular" },
  { label: "Público", value: "publico" },
];

export const vehicleUses: OptionType[] = [
  { label: "Personal", value: "0" },
  { label: "Taxi", value: "1" },
  { label: "Herramienta trabajo", value: "2" },
];