import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "../api/auth.api";
import { useAuthStore, useUIStore } from "../store";


export const useLogin = () => {
  const login = useAuthStore((s) => s.login);
  const showLoader = useUIStore((s) => s.showLoader);
  const hideLoader = useUIStore((s) => s.hideLoader);

  return useMutation({
    mutationFn: loginRequest,
    onMutate: () => {
      showLoader();
    },
    onSuccess: (data) => {
      login(data.token, data.user);
    },
    onSettled: () => {
      hideLoader();
    },
  });
};
