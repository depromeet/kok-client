import { Button, Flex, textRecipe } from "@repo/ui/components";

import { footerContainerStyle } from "./style.css";

interface IProfileListFooterProps {
  currentMemberId: string;
}

const ProfileListFooter = ({ currentMemberId }: IProfileListFooterProps) => {
  return (
    <Flex justify="center" className={footerContainerStyle}>
      <Button
        disabled={currentMemberId === ""}
        className={textRecipe({ variant: "title3" })}
      >
        다음
      </Button>
    </Flex>
  );
};

export default ProfileListFooter;
