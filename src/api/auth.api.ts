import type { User } from "../auth/auth.store";

type LoginResponse = {
  token: string;
  user: User;
};

type LoginPayload = {
  email: string;
  password: string;
};

const API_URL = import.meta.env.VITE_API_URL;

export const loginRequest = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  console.log("API_URL:", API_URL);
  const res = await fetch(`${API_URL}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("Invalid credentials");
  }

  return res.json();
};
