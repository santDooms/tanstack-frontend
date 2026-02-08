import { useNavigate } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/useLogin";
import { Button, Input } from "../components/ui";

type FormValues = {
  password: string
  email: string
}

export function LoginPage() {
  const {
    register,
    watch,
    formState: { isValid , errors },
    handleSubmit,
  } = useForm<FormValues>({ mode: "onChange" });

  const { email, password } = watch();
  const login = useLogin();
  const navigate = useNavigate();

  const onSubmit = async (data: FormValues) => {
    const { email, password } = data;
    await login.mutateAsync({ email, password });
    navigate({ to: "/dashboard" });
  };
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded shadow w-96 space-y-4"
      >
        <h1 className="text-xl font-semibold">Login</h1>

        <Input
          label="Email"
          placeholder="Email"
          hasValue={!!email}
          {...register("email", { required: true })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Password"
          hasValue={!!password}
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters long",
            },
          })}
        />
        <Button
          type="submit"
          variant="primary"
          isLoading={login.isPending}
          disabled={!isValid || login.isPending}
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
