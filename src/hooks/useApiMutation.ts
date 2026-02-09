import {
  useMutation,
  type MutationFunctionContext,
  type UseMutationOptions,
} from "@tanstack/react-query";
import { useUIStore } from "../store";

export function useApiMutation<TData = unknown, TVariables = unknown>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, Error, TVariables>,
) {
  const showLoader = useUIStore((s) => s.showLoader);
  const hideLoader = useUIStore((s) => s.hideLoader);

  return useMutation({
    mutationFn,
    onMutate: (variables: TVariables, context: MutationFunctionContext) => {
      showLoader();
      options?.onMutate?.(variables, context);
    },
    onSuccess: (data, variables, onMutateResult, context) => {
      options?.onSuccess?.(data, variables, onMutateResult, context);
    },
    onError: (error, variables, onMutateResult, context) => {
      options?.onError?.(error, variables, onMutateResult, context);
    },
    onSettled: (data, error, variables, onMutateResult, context) => {
      hideLoader();
      options?.onSettled?.(data, error, variables, onMutateResult, context);
    },
    ...options,
  });
}
