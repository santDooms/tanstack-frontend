import { Button } from "../../ui";
import { Breadcrumb } from "../../ui/BreadCrumb";
import { DashboardTabs } from "./DashboardTabs";

interface DashboardHeaderProps {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  setTab: (tab: any) => void;
  tab: any;
}

export function DashboardHeader({
  title,
  description,
  actionLabel,
  onAction,
  setTab,
  tab,
}: DashboardHeaderProps) {
  return (
    <div className="space-y-4 border-b border-slate-200 bg-white pt-3">
      <div className="px-20">
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
      <div className="border-t pt-4 px-20">
        <DashboardTabs tab={tab} onChange={setTab} />
      </div>
    </div>
  );
}
