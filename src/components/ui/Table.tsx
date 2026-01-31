import type { Quotation } from "../../types/quotation";

interface QuotationTableProps {
  data: Quotation[];
  onResume?: (item: Quotation) => void;
}

export function Table({
  data,
  onResume,
}: QuotationTableProps) {
  console.log("Table data:", data);
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="px-4 py-3 text-left">Fecha y hora</th>
            <th className="px-4 py-3 text-left">Cotización</th>
            <th className="px-4 py-3 text-left">Conductor</th>
            <th className="px-4 py-3 text-left">Identificación</th>
            <th className="px-4 py-3 text-left">Placa</th>
            <th className="px-4 py-3 text-left">Vehículo</th>
            <th className="px-4 py-3 text-left">Validez</th>
            <th className="px-4 py-3 text-left">Prima</th>
            <th className="px-4 py-3 text-left">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.policyId}
              className={
                index % 2 === 0 ? "bg-white border-t" : "bg-slate-50 border-t"
              }
            >
              <td className="px-4 py-3">
                <div>{item.createdAt ?? "-"}</div>
                <div className="text-xs text-slate-500">
                  {item.createdAt ?? ""}
                </div>
              </td>
              <td className="px-4 py-3 font-medium text-blue-600">
                {item.policyId ?? "-"}
              </td>
              <td className="px-4 py-3">{item.nombre ?? "-"}</td>
              <td className="px-4 py-3">
                <div>{item.cedula ?? "-"}</div>
              </td>

              <td className="px-4 py-3">
                <div>{item.placa ?? "-"}</div>
              </td>
              <td className="px-4 py-3">
                <div>{item.marca}</div>
                <div className="text-xs text-slate-500">{item.modelo}</div>
              </td>
              <td className="px-4 py-3">
                {item.vigenciaHasta ? (
                  <span className="inline-flex items-center rounded-md bg-green-600 px-2 py-0.5 text-xs font-medium text-white">
                    {item.vigenciaHasta} días
                  </span>
                ) : (
                  "-"
                )}
              </td>
              <td className="px-4 py-3">
                    <div>${item.valorPrima}</div>
                    <div className="text-xs text-slate-500">
                      {item.planName}
                    </div>
              </td>
              <td className="px-4 py-3">
                <button
                  onClick={() => onResume?.(item)}
                  className="rounded-md border border-green-600 px-3 py-1 text-sm font-medium text-green-700 hover:bg-green-50"
                >
                  Retomar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
