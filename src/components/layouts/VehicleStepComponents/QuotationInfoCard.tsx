interface QuotationInfoCardProps {
  plateType: string;
  plateNumber: string;
}

export const QuotationInfoCard = ({
  plateType,
  plateNumber,
}: QuotationInfoCardProps) => {
  return (
    <div className="mx-28 max-w-2xl bg-white rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.22)] px-10 py-6 flex items-center justify-between gap-6">
      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
          🚗
        </div>
        <div>
          <p className="text-sm text-gray-500">Tipo de Placa</p>
          <p className="text-base font-semibold text-blue-700">{plateType}</p>
        </div>
      </div>

      <div className="w-px self-stretch bg-gray-200" />

      <div className="flex items-center gap-4 flex-1">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl">
          🔖
        </div>
        <div>
          <p className="text-sm text-gray-500">Número de Placa</p>
          <p className="text-base font-semibold text-blue-700">{plateNumber}</p>
        </div>
      </div>
    </div>
  );
};
