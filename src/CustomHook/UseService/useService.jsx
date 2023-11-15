import { useQuery } from "@tanstack/react-query";

const useService = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await fetch("https://ridewave-server.vercel.app/service");
      return await data.json();
    },
  });

  return { data, isLoading, isFetching, refetch };
};

export default useService;
