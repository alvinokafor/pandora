// import { MutationCallBackArgs, QueryCallBackArgs } from "../types";
import { MutationCallBackArgs, QueryCallBackArgs } from "../types/AdapterTypes";
import {
  UseMutationResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";

// Custom query hook
export function useTanstackQuery<B>({
  queryCallback,
  queryKey,
  slug,
}: QueryCallBackArgs<B>) {
  return useQuery({
    queryKey: queryKey,
    queryFn: () => queryCallback(slug),
  });
}

// Custom mutation hook
// export function useTanstackMutation<
//   TData,
//   TVariables,
//   TError = unknown,
//   TContext = unknown
// >(
//   {
//     mutationCallback,
//     params,
//   }: {
//     mutationCallback: ({
//       payload,
//       params,
//     }: MutationCallBackArgs<TVariables>) => Promise<TData>;
//     params?: string;
//   }
// ): UseMutationResult<TData, TError, TVariables, TContext> {
//   return useMutation<TData, TError, TVariables, TContext>({
//     mutationFn: (payload: TVariables) => mutationCallback({ payload, params }),
//   });
// }

export const tanstackWrapper = {
  mutation: <TData, TVariables, TError = unknown, TContext = unknown>({
    mutationCallback,
    params,
  }: {
    mutationCallback: ({
      payload,
      params,
    }: MutationCallBackArgs<TVariables>) => Promise<TData>;
    params?: string;
  }): UseMutationResult<TData, TError, TVariables, TContext> => {
    return useMutation<TData, TError, TVariables, TContext>({
      mutationFn: (payload: TVariables) =>
        mutationCallback({ payload, params }),
    });
  },
};

export default tanstackWrapper;
