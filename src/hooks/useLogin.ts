import { loginRequest } from "../api/auth.api";
import { useAuthStore } from "../store";
import { useApiMutation } from "./useApiMutation";


export const useLogin = () => {
  const login = useAuthStore((s) => s.login);

  return useApiMutation(loginRequest, {
    onSuccess: (data) => {
      login(data.token, data.user);
    },
  });
};
