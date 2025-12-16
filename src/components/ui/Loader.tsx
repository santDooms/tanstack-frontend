import clsx from "clsx";
import LoaderLogo from "../../assets/loadingLogo.svg";

export function Loader() {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-[9999]",
        "flex items-center justify-center",
        "bg-blue-900/80 backdrop-blur-sm"
      )}
    >
      <div className="relative flex items-center gap-4">
        <img src={LoaderLogo} alt="loader" className="h-14 w-14" />
      </div>
    </div>
  );
}
