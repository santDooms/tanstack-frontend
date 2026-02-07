import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/newQuotationLayout/vehicleStep/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello here will be a form to initiate a new vehicle quote</div>
}
