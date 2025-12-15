import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Button, Input } from "../components/ui";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = useLogin();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login.mutateAsync({ email, password });
    navigate({ to: "/" });
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded shadow w-96 space-y-4"
      >
        <h1 className="text-xl font-semibold">Login</h1>

        <Input
          label="Email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="primary"
          isLoading={login.isPending}
          className="w-full"
        >
          Login
        </Button>
  
        {login.isError && (
          <p className="text-red-500 text-sm">Invalid credentials</p>
        )}
      </form>
    </div>
  );
}
