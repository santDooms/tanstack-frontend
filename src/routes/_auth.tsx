import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { useAuthStore } from "../store/auth.store";


export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const token = useAuthStore((s) => s.token);
    if (!token) {
      return <Navigate to="/login" />;
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  return <Outlet />;
}
