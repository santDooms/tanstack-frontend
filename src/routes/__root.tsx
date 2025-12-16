import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { useUIStore } from "../store/ui.store";
import { Loader } from "../components/ui";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  const isLoading = useUIStore((s) => s.isLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className="min-h-screen w-full flex flex-col bg-slate-100">
        {/* HEADER */}
        <header className="bg-white border-b w-full">
          <div className="max-w-[1400px] mx-auto px-20 py-4 flex items-center justify-between">
            <h1 className="text-xl font-bold text-slate-800">TanStack App</h1>

            <nav className="flex gap-6">
              <Link to="/" className="text-slate-600 hover:text-slate-900">
                Home
              </Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1">
          <div className="max-w-[1400px] mx-auto px-20 py-10">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <Outlet />
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-white border-t w-full">
          <div className="max-w-[1400px] mx-auto px-20 py-6 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} TanStack App
          </div>
        </footer>
      </div>
    </>
  );
}