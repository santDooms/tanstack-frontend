import { useState } from "react";
import { QuotationsTable } from "../components/layouts/DashboardComponents/QuotationsTable";
import { Table } from "../components/ui";
import { DashboardTabs } from "../components/layouts/DashboardComponents/DashboardTabs";
import { DashboardHeader } from "../components/layouts/DashboardComponents/DashboardHeader";
import { useNavigate, type NavigateOptions } from "@tanstack/react-router";

export type DashboardTab = "cotizacion" | "proceso" | "emitidas";

function QuoteTable() {
  return <QuotationsTable />;
}

function EmissionTable() {
  return <Table data={[]} />;
}

function EmitedTable() {
  return <Table data={[]} />;
}

const tableToRender: Record<DashboardTab, React.ComponentType> = {
  cotizacion: QuoteTable,
  proceso: EmissionTable,
  emitidas: EmitedTable,
};

export function Dashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<DashboardTab>("cotizacion");
  const TableComponent = tableToRender[tab];

  const handleNavigate = async () => {
    await navigate({ to: "/newQuotation" } as NavigateOptions);
  };
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Mis negocios en línea"
        actionLabel="Nueva cotización"
        onAction={handleNavigate}
        breadcrumb={[
          { label: "Póliza Express" },
          { label: "Mis negocios en línea" },
        ]}
      />
      <DashboardTabs tab={tab} onChange={setTab} />
      <TableComponent />
    </div>
  );
}
