import {
  createFileRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";
import { Header } from "../components/layouts/Header";
import { Footer } from "../components/layouts/Footer";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      throw redirect({
        to: "/login",
      });
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-20 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
