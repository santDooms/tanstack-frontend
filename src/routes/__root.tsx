import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Loader } from "../components/ui";
import { useUIStore } from "../store";

export const Route = createRootRoute({
  component: RootLayout,
  pendingComponent: () => <Loader />,
});

function RootLayout() {
 const isLoading = useUIStore((s) => s.isLoading)

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {isLoading && <Loader />}
      <main id="main-content" role="main" tabIndex={-1}>
        <Outlet />
      </main>
    </div>
  );
}