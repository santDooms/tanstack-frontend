import type { Quotation } from "../../types/quotation";

export function Table({ data }: { data: Quotation[] }) {
  console.log("Table data:", data);
  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            <th className="px-4 py-3 text-left">Número</th>
            <th className="px-4 py-3 text-left">Cliente</th>
            <th className="px-4 py-3 text-left">Fecha</th>
            <th className="px-4 py-3 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-t">
            <td className="px-4 py-3">#1234</td>
            <td className="px-4 py-3">Juan Pérez</td>
            <td className="px-4 py-3">2025-01-10</td>
            <td className="px-4 py-3">Pendiente</td>
          </tr>

          <tr className="bg-slate-50 border-t">
            <td className="px-4 py-3">#1235</td>
            <td className="px-4 py-3">Ana Gómez</td>
            <td className="px-4 py-3">2025-01-09</td>
            <td className="px-4 py-3">Emitida</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
