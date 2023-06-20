import { useQuery } from "@tanstack/react-query";
import { IClient } from "base/@types";
import { displacementService } from "base/data";

const useClientRequests = () => {
  const listFetcher = () =>
    displacementService.get<IClient[]>("Cliente").then((res) => res.data);

  const { data, isSuccess, error, isError, isLoading, status, refetch } =
    useQuery(["Cliente"], () => listFetcher());

  return {
    data,
    isSuccess,
    error,
    isError,
    isLoading,
    status,
    refetch,
  };
};

export default useClientRequests;
