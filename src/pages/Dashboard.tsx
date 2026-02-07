import { useState } from "react";
import { QuotationsTable } from "../components/layouts/DashboardComponents/QuotationsTable";
import { Table } from "../components/ui";
import { DashboardHeader } from "../components/layouts/DashboardComponents/DashboardHeader";
import { useNavigate, type NavigateOptions } from "@tanstack/react-router";
import type { Quotation } from "../types/quotation";

export type DashboardTab = "cotizacion" | "proceso" | "emitidas";

const otherTablesData: Quotation[] = [];

function QuoteTable() {
  return <QuotationsTable />;
}

function EmissionTable() {
  return <Table data={otherTablesData} />;
}

function EmitedTable() {
  return <Table data={otherTablesData} />;
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
    await navigate({ to: "/newQuotationLayout/validationStep" } as NavigateOptions);
  };
  return (
    <div className="space-y-6">
      <DashboardHeader
        title="Mis negocios en línea"
        actionLabel="Nueva cotización"
        onAction={handleNavigate}
        setTab={setTab}
        tab={tab}
      />
      <div className="px-20">
        <TableComponent />
      </div>
    </div>
  );
}
