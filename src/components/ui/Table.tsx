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
    <div className="overflow-hidden rounded-xl border border-slate-200">
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
              key={item.id ?? index}
              className={
                index % 2 === 0
                  ? "bg-white border-t"
                  : "bg-slate-50 border-t"
              }
            >
              {/* Fecha y hora */}
              <td className="px-4 py-3">
                <div>{item.createdAt ?? "-"}</div>
                <div className="text-xs text-slate-500">
                  {item.createdAt ?? ""}
                </div>
              </td>

              {/* Cotización */}
              <td className="px-4 py-3 font-medium text-blue-600">
                {item.policyId ?? "-"}
              </td>

              {/* Conductor */}
              <td className="px-4 py-3">
                {item.nombre ?? "-"}
              </td>

              {/* Identificación */}
              <td className="px-4 py-3">
                <div>{item.documentNumber ?? "-"}</div>
                <div className="text-xs text-slate-500">
                  {item.documentType ?? ""}
                </div>
              </td>

              {/* Placa */}
              <td className="px-4 py-3">
                <div>{item.plate ?? "-"}</div>
                <div className="text-xs text-slate-500">
                  {item.country ?? ""}
                </div>
              </td>

              {/* Vehículo */}
              <td className="px-4 py-3">
                {item.vehicleBrand ? (
                  <>
                    <div>{item.vehicleBrand}</div>
                    <div className="text-xs text-slate-500">
                      {item.vehicleModel}
                    </div>
                  </>
                ) : (
                  "-"
                )}
              </td>

              {/* Validez */}
              <td className="px-4 py-3">
                {item.validityDays ? (
                  <span className="inline-flex items-center rounded-md bg-green-600 px-2 py-0.5 text-xs font-medium text-white">
                    {item.validityDays} días
                  </span>
                ) : (
                  "-"
                )}
              </td>

              {/* Prima */}
              <td className="px-4 py-3">
                {item.premiumAmount ? (
                  <>
                    <div>
                      ${item.premiumAmount.toLocaleString("es-CO")}
                    </div>
                    <div className="text-xs text-slate-500">
                      {item.planName}
                    </div>
                  </>
                ) : (
                  "-"
                )}
              </td>

              {/* Acciones */}
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
