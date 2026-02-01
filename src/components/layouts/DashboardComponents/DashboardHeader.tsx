
import { Button } from "../../ui";
import { Breadcrumb } from "../../ui/BreadCrumb";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function DashboardHeader({
  title,
  description,
  actionLabel,
  onAction,
}: DashboardHeaderProps) {
  return (
    <div className="space-y-4 border-b border-slate-200 pb-8 relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] px-20">
      <Breadcrumb />
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">{title}</h2>
          {description && (
            <p className="text-sm text-slate-500">{description}</p>
          )}
        </div>

        {actionLabel && (
          <Button
            onClick={onAction}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm"
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
