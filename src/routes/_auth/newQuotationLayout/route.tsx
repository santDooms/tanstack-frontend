import { createFileRoute } from '@tanstack/react-router'
import { NewQuoteLayout } from '../../../pages/NewQuoteLayout';


export const Route = createFileRoute("/_auth/newQuotationLayout")({
  component: NewQuoteLayout,
  staticData: {
    breadcrumb: "Nueva cotización",
    breadcrumbParent: {
      label: "Mis negocios en línea",
      to: "/dashboard",
    },
  },
});