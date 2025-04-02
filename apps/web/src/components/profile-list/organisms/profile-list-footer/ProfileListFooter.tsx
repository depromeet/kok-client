import { Button, Flex, textRecipe } from "@repo/ui/components";
import { useRouter, useParams } from "next/navigation";
import { useQueryClient } from "@repo/shared/tanstack-query";
import { prefetchRoomData } from "@/hooks/api/useRoomInfo";

import { footerContainerStyle } from "./style.css";

interface IProfileListFooterProps {
  currentMemberId: string;
}

const ProfileListFooter = ({ currentMemberId }: IProfileListFooterProps) => {
  const router = useRouter();
  const params = useParams();
  const queryClient = useQueryClient();
  const roomId = (params?.roomId as string) || "";

  const handleNextClick = async () => {
    if (currentMemberId) {
      await prefetchRoomData(queryClient, roomId);

      router.prefetch(`/share/${roomId}?memberId=${currentMemberId}`);
      router.replace(`/share/${roomId}?memberId=${currentMemberId}`);
    }
  };

  return (
    <Flex justify="center" className={footerContainerStyle}>
      <Button
        disabled={currentMemberId === ""}
        className={textRecipe({ variant: "title3" })}
        onClick={handleNextClick}
      >
        다음
      </Button>
    </Flex>
  );
};

export default ProfileListFooter;
