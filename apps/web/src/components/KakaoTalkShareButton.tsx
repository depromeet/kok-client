"use client";

import { Button, type ButtonProps } from "@repo/ui/components";
import { PropsWithChildren, useEffect } from "react";

const MESSAGE_TEMPLATE_START_INPUT = 117720;

type KakaoTalkShareButtonProps = ButtonProps;

const KakaoTalkShareButton = ({
  children,
  ...props
}: PropsWithChildren<KakaoTalkShareButtonProps>) => {
  const onClickShareButton = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendCustom({
      templateId: MESSAGE_TEMPLATE_START_INPUT,
    });
  };

  useEffect(() => {
    if (window.Kakao.isInitialized()) return;

    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);

  return (
    <Button onClick={onClickShareButton} {...props}>
      {children}
    </Button>
  );
};

export default KakaoTalkShareButton;
