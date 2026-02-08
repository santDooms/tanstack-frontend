type idTypes = {
  label: string;
  value: string;
};

type plateTypes = {
    label: string;
    value: string;
}

export const selectIdTypes: idTypes[] = [
    { label: "Cédula de ciudadanía", value: "cc" },
    { label: "Cédula de extranjería", value: "ce" },
    { label: "Pasaporte", value: "passport" },
];

export const selectPlateTypes: plateTypes[] = [
  { label: "Particular", value: "particular" },
  { label: "Público", value: "publico" },
];
