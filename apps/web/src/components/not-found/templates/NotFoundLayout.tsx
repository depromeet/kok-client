"use client";

import { Button, Flex, Text, textRecipe } from "@repo/ui/components";
import {
  bubbleLayoutStyle,
  bubbleStyle,
  containerStyle,
  errorImageStyle,
  errorImageWrapperStyle,
  errorMessageStyle,
  footerContainerStyle,
  headerStyle,
} from "./style.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundLayout = () => {
  const router = useRouter();
  const handleClick = () => {
    router.replace("/create-room");
  };
  return (
    <Flex direction="column" align="center" className={containerStyle}>
      {/* Header */}
      <Flex direction="column" gap={4} className={headerStyle}>
        {/* 말풍선 */}
        <Flex direction="column" align="center" className={bubbleLayoutStyle}>
          <Flex justify="center" align="center" className={bubbleStyle}>
            <Text variant="title3"> 찾을 수 없는 방</Text>
          </Flex>
          <Flex>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="5"
              viewBox="0 0 12 5"
              fill="none"
            >
              <path
                d="M3.78854 3.58749C4.97755 4.8846 7.02245 4.8846 8.21146 3.5875L11.5 0H0.5L3.78854 3.58749Z"
                fill="#E7E7E7"
              />
            </svg>
          </Flex>
        </Flex>

        {/* 텍스트 */}
        <Text variant="heading3">앗! 잘못된 링크예요</Text>
      </Flex>

      {/* Mid */}
      <Flex direction="column" align="center">
        <div className={errorImageWrapperStyle}>
          <span className={errorMessageStyle}>에러</span>
          <Image
            src="/images/errorImage.png"
            alt=""
            width={153}
            height={153}
            className={errorImageStyle}
          />
        </div>
      </Flex>

      <Text variant="body1">새로운 모임을 만들어볼까요?</Text>

      {/* Bottom */}
      <Flex justify="center" className={footerContainerStyle}>
        <Button
          className={textRecipe({ variant: "title3" })}
          onClick={handleClick}
        >
          새 모임 만들기
        </Button>
      </Flex>
    </Flex>
  );
};

export default NotFoundLayout;
