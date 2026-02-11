import { Outlet, useNavigate } from "@tanstack/react-router";
import { Stepper } from "../components/layouts/QuotationStepper";
import { Breadcrumb } from "../components/ui/BreadCrumb";
import { useQuotationStore } from "../store";
import { Button } from "../components/ui";

export function NewQuoteLayout() {
  const navigate = useNavigate();
  const { policyId, resetQuotation } = useQuotationStore((s) => s);
  const handleButtonClick = () => {
    navigate({ to: "/dashboard" });
    resetQuotation();
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="px-6 py-4">
        <div className="flex flex-row gap-32">
          {policyId && (
            <div className="flex flex-row gap-9 items-center">
              <span className="text-sm">Cotización</span>
              <span className="text-base text-black">{policyId}</span>
            </div>
          )}
          <Stepper />
        </div>
      </header>

      <main className="py-4 min-w-full bg-white">
        <div className="px-12">
          <Breadcrumb resetStore={resetQuotation} />
          <div className="flex justify-end mb-5">
            <Button
              className="w-full max-w-48 min-h-11"
              onClick={handleButtonClick}
            >
              Ir a mis negocios
            </Button>
          </div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
