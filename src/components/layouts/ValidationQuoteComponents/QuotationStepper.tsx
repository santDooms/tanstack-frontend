import { useRouterState } from "@tanstack/react-router";

const steps = [
  { path: "/newQuotationLayout/validationStep", label: "Validación de datos" },
  { path: "/newQuotationLayout/vehicleStep", label: "Información del vehículo" },
  { path: "/newQuotationLayout/personalInfoStep", label: "Información personal" },
  { path: "/newQuotationLayout/ratingStep", label: "Cotización" },
];

export function Stepper() {
  const pathname = useRouterState({ select: s => s.location.pathname });
  const currentIndex = steps.findIndex(step => pathname.startsWith(step.path));
  return (
    <div className="flex items-center gap-8 text-sm">
      {steps.map((step, index) => {
        const isActive = index === currentIndex;
        const isCompleted = index < currentIndex;

        return (
          <div key={step.path} className="flex items-center gap-2">
            <div
              className={`
                w-6 h-6 flex items-center justify-center rounded-full border
                ${isActive ? "bg-green-600 text-white border-green-600" : ""}
                ${isCompleted ? "bg-green-600 text-white border-green-600" : ""}
                ${!isActive && !isCompleted ? "border-gray-400 text-gray-500" : ""}
              `}
            >
              {index + 1}
            </div>

            <span
              className={`
                ${isActive ? "text-black font-semibold" : "text-gray-500"}
              `}
            >
              {step.label}
            </span>

            {index < steps.length - 1 && (
              <div className="w-10 h-px bg-gray-300 ml-2" />
            )}
          </div>
        )
      })}
    </div>
  )
}
