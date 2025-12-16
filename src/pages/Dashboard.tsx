import { useState } from "react";
import { CotizacionesTable } from "../components/layouts/CotizacionesTable";
import { Button, Table } from "../components/ui";
import { DashboardTabs } from "../components/layouts/DashboardTabs";

export type DashboardTab = "cotizacion" | "proceso" | "emitidas";

function QuoteTable() {
  return <CotizacionesTable />;
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
  const [tab, setTab] = useState<DashboardTab>("cotizacion");
  const TableComponent = tableToRender[tab];
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Cotizaciones</h2>
          <p className="text-sm text-slate-500">
            Gestión de cotizaciones del sistema
          </p>
        </div>

        <Button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
          Nueva cotización
        </Button>
      </div>

      <DashboardTabs tab={tab} onChange={setTab} />
      <TableComponent />
    </div>
  );
}
