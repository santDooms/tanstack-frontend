import { createFileRoute, Navigate, Outlet } from "@tanstack/react-router";
import { useAuth } from "../auth/auth.store";

export const Route = createFileRoute("/_auth")({
  beforeLoad: () => {
    const token = useAuth().token;
    if (!token) {
      return <Navigate to="/login" />;
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  return <Outlet />;
}
