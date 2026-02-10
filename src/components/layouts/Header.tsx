import { Button } from "../ui";
import HeaderLogo from "../../assets/app_logo.svg";
import ProfileLogo from "../../assets/profile.jpg";
import ArrowDown from "../../assets/arrowDown.svg";
import { useAuthStore, useQuotationStore } from "../../store";
import { useNavigate, type NavigateOptions } from "@tanstack/react-router";


export function Header() {
  const navigate = useNavigate();
  const { logout, user } = useAuthStore((s) => s);
  const { resetQuotation } = useQuotationStore((s) => s);
  
  const handleLogout = async () => {
    await navigate({ to: "/login" } as NavigateOptions);
    logout();
    resetQuotation();
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">

        <div className="flex items-center">
          <img
            src={HeaderLogo}
            alt="HDI Seguros"
            className="h-16 w-auto"
          />
        </div>

        <div className="flex items-center gap-4">

          <div className="flex items-center gap-2 text-sm text-gray-700">
            <img
              src={ArrowDown}
              alt="User"
              className="h-8 w-auto"
            />
            <span>{user!.name}</span>
            <img
              src={ProfileLogo}
              alt="Open"
              className="h-12 w-auto"
            />
          </div>

          <Button
            variant="primary"
            className="border-green-600 text-green-600"
            onClick={handleLogout}
          >
            Cerrar sesión
          </Button>

        </div>
      </div>
    </header>
  )
}
