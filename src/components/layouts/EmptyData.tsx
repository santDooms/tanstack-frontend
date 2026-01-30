import React from "react";

interface EmptyDataProps {
  title?: string;
  message?: string;
  action?: React.ReactNode;
}

export function EmptyData({
  title = "No encontramos lo que buscabas",
  message = "Parece que no hay resultados para mostrar en este momento.",
  action,
}: EmptyDataProps) {
  return (
    <div className="flex items-center justify-center min-h-[400px] w-full">
      <div className="relative max-w-md mx-auto p-8 text-center">
        <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-lg">
          <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-gray-400"></div>
          <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-gray-400"></div>
          <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-gray-400"></div>
          <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-gray-400"></div>
        </div>

        <div className="relative z-10">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-500 text-sm mb-4">{message}</p>
          {action}
        </div>
      </div>
    </div>
  );
}
