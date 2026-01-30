import type { DashboardTab } from "../../../pages/Dashboard";

type Props = {
  tab: DashboardTab;
  onChange: (tab: DashboardTab) => void;
};

export function DashboardTabs({ tab, onChange }: Props) {
    console.log("DashboardTabs props:", { tab, onChange });
  return (
    <div className="flex gap-8 border-b">
      <Tab active={tab === "cotizacion"} onClick={() => onChange("cotizacion")}>
        Cotización
      </Tab>
      <Tab active={tab === "proceso"} onClick={() => onChange("proceso")}>
        Proceso de emisión
      </Tab>
      <Tab active={tab === "emitidas"} onClick={() => onChange("emitidas")}>
        Pólizas emitidas
      </Tab>
    </div>
  );
}

function Tab({ active, children, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`pb-3 text-sm font-medium border-b-2 ${
        active
          ? "border-green-600 text-green-600"
          : "border-transparent text-slate-500"
      }`}
    >
      {children}
    </button>
  );
}
