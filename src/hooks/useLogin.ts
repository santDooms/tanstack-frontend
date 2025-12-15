import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/auth.api";
import { useAuth } from "../auth/auth.store";

export const useLogin = () => {
  const auth = useAuth();

  return useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      auth.login(data.token, data.user);
    },
  });
};
