import { Button, Flex, textRecipe } from "@repo/ui/components";
import { useRouter, useParams } from "next/navigation";

import { footerContainerStyle } from "./style.css";

interface IProfileListFooterProps {
  currentMemberId: string;
}

const ProfileListFooter = ({ currentMemberId }: IProfileListFooterProps) => {
  const router = useRouter();
  const params = useParams();
  const roomId = (params?.roomId as string) || "";

  const handleNextClick = () => {
    if (currentMemberId) {
      router.push(`/result/${roomId}?memberId=${currentMemberId}`);
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
