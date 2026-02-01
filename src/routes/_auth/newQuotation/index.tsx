import { createFileRoute } from '@tanstack/react-router'
import { Breadcrumb } from '../../../components/ui/BreadCrumb'

export const Route = createFileRoute("/_auth/newQuotation/")({
  component: RouteComponent,
  staticData: {
    breadcrumb: "Nueva cotización",
    breadcrumbParent: {
      label: "Mis negocios en línea",
      to: "/dashboard",
    },
  },
});

function RouteComponent() {
  return (
    <>
      <Breadcrumb />
      <div>Hello "/_auth/newQuotation/"!</div>
    </>
  );
}
