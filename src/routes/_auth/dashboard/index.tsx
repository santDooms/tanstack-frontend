import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "../../../pages/Dashboard";


export const Route = createFileRoute("/_auth/dashboard/")({
  component: Dashboard,
  beforeLoad: async () => {
    
  },
  staticData: {
    breadcrumb: "Mis negocios en línea",
  },
});