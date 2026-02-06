import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type User = {
  id: string;
  email: string;
  name: string;
  role: "user" | "admin" | "broker";
  brokerKey: string;
};

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,

        login: (token, user) => {
          set(
            {
              token,
              user,
              isAuthenticated: true,
            },
            false,
            "auth/login",
          );
        },

        logout: () => {
          set(
            {
              token: null,
              user: null,
              isAuthenticated: false,
            },
            false,
            "auth/logout",
          );
        },
      }),
      {
        name: "auth-storage",
      },
    ),
    { name: "Auth Store", enabled: import.meta.env.DEV },
  ),
);
