import {
  useQuery,
  useMutation,
  useQueryClient,
  // useInfiniteQuery,
} from "@tanstack/react-query";
import { postLoginForm } from "../api/post";

// import axios, { AxiosError } from "axios";
// import Swal from "sweetalert2";

//get all properties
export const useQueryPropertyFunction = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["properties", url],
    // queryFn: getRequest,
  });
  return { data, error, isLoading };
};

export const useMutationContactMessageFunction = (queryKey: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (loginDetails: { email: string; password: string }) =>
      postLoginForm(loginDetails),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
    },
  });
};
