import { create } from "zustand";

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

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  login: (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));

    set({
      token,
      user,
      isAuthenticated: true,
    });
  },

  logout: () => {
    sessionStorage.clear();
    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
  },
}));
