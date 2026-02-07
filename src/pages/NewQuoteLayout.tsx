import { Outlet } from "@tanstack/react-router"
import { Stepper } from "../components/layouts/ValidationQuoteComponents/QuotationStepper"
import { Breadcrumb } from "../components/ui/BreadCrumb"


export function NewQuoteLayout() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <header className="px-6 py-4">
        <Stepper />
      </header>

      <main className="px-8 py-4 min-w-full bg-white">
        <Breadcrumb />
        <Outlet />
      </main>
    </div>
  )
}
