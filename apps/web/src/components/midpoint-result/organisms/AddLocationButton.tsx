"use client";

import { Text, Flex } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import { AddLocationButtonStyle } from "./styles.css";
import { useState } from "react";
import AddLocationModal from "./AddLocationModal";

const AddLocationButton = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <Flex
        as="button"
        className={AddLocationButtonStyle}
        onClick={() => setIsOpen(true)}
      >
        <Text variant="title4" color={theme.colors.text1}>
          원하는 모임 장소 추가
        </Text>
      </Flex>

      <AddLocationModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AddLocationButton;
