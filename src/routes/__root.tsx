import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { Loader } from "../components/ui";
import { useUIStore } from "../store";

export const Route = createRootRoute({
  component: RootLayout,
//  defaultLoadingComponent: () => <Loader />,
});

function RootLayout() {
  const isLoading = useUIStore((s) => s.isLoading);
  return (
    <>
      {isLoading && <Loader />}
        <main className="flex-1">
          <div className="max-w-[1400px] mx-auto px-20 py-10">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <Outlet />
            </div>
          </div>
        </main>
    </>
  );
}