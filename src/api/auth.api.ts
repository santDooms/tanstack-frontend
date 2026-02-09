import api from "../lib/axios";
import type { LoginPayload, LoginResponse } from "../types/api";

export const loginRequest = (payload: LoginPayload): Promise<LoginResponse> => {
  return api
    .post<LoginResponse>("/auth/login", payload)
    .then((response) => response.data);
};
