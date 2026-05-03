import {
  useQuery,
  // useMutation,
  // useQueryClient,
  // useInfiniteQuery,
} from "@tanstack/react-query";

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

// tailwind.config = {
//   darkMode: "class",
//   theme: {
//     extend: {

//     },
//   },
// }
