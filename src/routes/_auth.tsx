import {
  createFileRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";
import { useAuthStore } from "../store";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const { isAuthenticated } = useAuthStore.getState();
    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: AuthLayout,
  staticData: { breadcrumb: "Póliza Express" },
});

function AuthLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
