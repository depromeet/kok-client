import { Button, Flex, textRecipe } from "@repo/ui/components";
import { useRouter, useParams } from "next/navigation";
import { useQueryClient } from "@repo/shared/tanstack-query";
import { prefetchRoomData } from "@/hooks/api/useRoomInfo";

import { footerContainerStyle } from "./style.css";
import { useMemberStore } from "@/store/useMember.store";

interface IProfileListFooterProps {
  currentMemberId: string;
  currentMemberAddress: string;
  currentMemberNickname: string;
  currentMemberImage: string;
}

const ProfileListFooter = ({
  currentMemberId,
  currentMemberAddress,
  currentMemberNickname,
  currentMemberImage,
}: IProfileListFooterProps) => {
  const { setMemberId, setNickname, setProfile } = useMemberStore();
  const router = useRouter();
  const params = useParams();
  const queryClient = useQueryClient();
  const roomId = (params?.roomId as string) || "";

  const handleNextClick = async () => {
    if (currentMemberId && currentMemberAddress) {
      await prefetchRoomData(queryClient, roomId);

      router.prefetch(`/share/${roomId}?memberId=${currentMemberId}`);
      router.replace(`/share/${roomId}?memberId=${currentMemberId}`);
    }
    if (currentMemberId && !currentMemberAddress) {
      setMemberId(currentMemberId);
      setNickname(currentMemberNickname);
      setProfile(currentMemberImage);
      router.push(`/profile/${roomId}/create-profile`);
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
