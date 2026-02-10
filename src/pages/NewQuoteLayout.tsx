import { Outlet } from "@tanstack/react-router"
import { Stepper } from "../components/layouts/ValidationQuoteComponents/QuotationStepper"
import { Breadcrumb } from "../components/ui/BreadCrumb"
import { useQuotationStore } from "../store";


export function NewQuoteLayout() {
  const { resetQuotation } = useQuotationStore((s) => s);
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="px-6 py-4">
        <Stepper />
      </header>

      <main className="px-8 py-4 min-w-full bg-white">
        <Breadcrumb resetStore={resetQuotation}/>
        <Outlet />
      </main>
    </div>
  )
}
