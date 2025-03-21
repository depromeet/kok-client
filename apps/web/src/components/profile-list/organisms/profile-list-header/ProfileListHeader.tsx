import { Flex, Text } from "@repo/ui/components";
import React from "react";
import { headingContainerStyle } from "./style.css";

const ProfileListHeader = () => {
  return (
    <Flex align="center" justify="center" className={headingContainerStyle}>
      <Text variant="heading3">프로필을 선택해주세요</Text>
    </Flex>
  );
};

export default ProfileListHeader;
