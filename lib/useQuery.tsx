import {
  useQuery,
  useMutation,
  useQueryClient,
  // useInfiniteQuery,
} from "@tanstack/react-query";
import { postLoginForm } from "../api/post";
import { getRequest } from "../api/get";

import { AxiosError } from "axios";
import API from "../api/api";
// import Swal from "sweetalert2";

//get user
export const useQueryUserFunction = () => {  
  const pathname = window.location.pathname;

  // Disable fetching for auth routes
  const enabled = !["/login", "/signup", "/forgot-password"].includes(pathname);
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const response = await API.get("/user", {
          withCredentials: true,
          headers: { "Cache-Control": "no-cache" },
        });        
        return response.data;
      } catch (error) {
        const axiosError = error as AxiosError<{ message?: string }>;
        // throw new Error(
        //   axiosError.response?.data?.message || "An unexpected error occurred.",
        // );
        console.log(axiosError);
      }
    },
    enabled, // 👈 automatically disabled for those paths
    retry: 3,
  });
  return { data, error, isLoading, refetch };
};

export const useQueryProduct = (url: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", url],
    queryFn: getRequest,
  });
  return { data, error, isLoading };
};
// // get single product
// export const useQueryAllProduct = (url: string) => {
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["products", url],
//     queryFn: getRequest,
//   });
//   return { data, error, isLoading };
// };

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
