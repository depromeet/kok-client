"use client";

import { Text, Flex } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import { AddLocationButtonStyle } from "./styles.css";

const AddLocationButton = () => {
  return (
    <Flex className={AddLocationButtonStyle}>
      <Text variant="title4" color={theme.colors.text1}>
        원하는 모임 장소 추가
      </Text>
    </Flex>
  );
};

export default AddLocationButton;
