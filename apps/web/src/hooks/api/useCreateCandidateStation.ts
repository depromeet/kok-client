import { useMutation } from "@repo/shared/tanstack-query";

const createCandidateStation = async ({
  roomId,
  stationId,
}: {
  roomId: string;
  stationId: number;
}) => {
  const response = await fetch(
    `/api/stations/create/candidate/${roomId}/${stationId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: "",
    }
  );
  return response.json();
};

export const useCreateCandidateStation = () => {
  return useMutation({
    mutationFn: createCandidateStation,
  });
};
