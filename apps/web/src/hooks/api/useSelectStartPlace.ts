import { LocationsRequestProps } from "@/api/types/locations/index.types";
import { useMutation } from "@repo/shared/tanstack-query";

const selectStartPlace = async (requestBody: LocationsRequestProps) => {
  const response = await fetch("/api/locations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  });
  return response.json();
};

export const useSelectStartPlace = () => {
  return useMutation({
    mutationFn: selectStartPlace,
  });
};
