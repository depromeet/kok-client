import { Button, Flex, textRecipe } from "@repo/ui/components";
import React from "react";
import { footerContainerStyle } from "./style.css";

const ProfileListFooter = () => {
  return (
    <Flex justify="center" className={footerContainerStyle}>
      <Button className={textRecipe({ variant: "title3" })}>다음</Button>
    </Flex>
  );
};

export default ProfileListFooter;
