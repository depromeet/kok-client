import { Flex, Text } from "@repo/ui/components";
import XIcon from "@/assets/icons/XIcon";
import { Trainagle } from "./Trainagle";
import {
  floatingAnimation,
  floatingTooltipStyle,
} from "../organism/CardItem.css";
import { theme } from "@repo/ui/tokens";
import { useState } from "react";

export const Tooltip = () => {
  const [show, setShow] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  return (
    <>
      {show && (
        <Flex
          direction="column"
          align="center"
          className={
            isClosing ? floatingAnimation.fadeOut : floatingAnimation.floating
          }
        >
          <div className={floatingTooltipStyle}>
            <Text
              variant="title4"
              style={{
                color: theme.colors.gray0,
              }}
            >
              역을 누르고 주변을 둘러보세요!
            </Text>
            <Flex onClick={handleClose}>
              <XIcon />
            </Flex>
            <div
              style={{
                position: "absolute",
                top: 23,
              }}
            >
              <Trainagle />
            </div>
          </div>
        </Flex>
      )}
    </>
  );
};
