import { createFileRoute } from '@tanstack/react-router'
import { VehicleStep } from '../../../../pages/VehicleStep'

export const Route = createFileRoute('/_auth/newQuotationLayout/vehicleStep/')({
  component: VehicleStep,
})