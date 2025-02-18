import type { Post } from "@/api/types/mocks/testData.type";

import {
  useMutation,
  useQueryClient,
  UseMutationResult,
} from "@repo/shared/tanstack-query";
import testDataController from "@/api/controllers/mocks/testData.controller";

export const usePostTestData = (
  // 데이터 생성 훅
  index: number,
  onSuccessCallback?: () => void // 성공 시 콜백 함수
) => {
  const queryClient = useQueryClient(); // 쿼리 클라이언트

  const mutation: UseMutationResult<Post | undefined, Error, Post, unknown> =
    // 데이터 생성 요청
    useMutation({
      mutationFn: async (newData: Post) => {
        const response = await testDataController.postTestData(newData);
        return response;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["Test", index] });
        if (onSuccessCallback) {
          onSuccessCallback();
        }
      },
      onError: (err: Error) => {
        console.error("An error occurred while creating data:", err.message);
      },
    });

  return {
    createData: mutation.mutate,
    isCreating: mutation.isPending,
    isCreateError: mutation.isError,
    createError: mutation.error,
  };
};
