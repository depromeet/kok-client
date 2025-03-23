"use client";

import { Button, textRecipe, type ButtonProps } from "@repo/ui/components";
import { PropsWithChildren, useEffect } from "react";
import { KAKAO_TEMPLATE_IDS } from "@/constants/kakao-template";

type KakaoTalkShareButtonProps = ButtonProps & {
  templateId?: number;
  templateArgs?: {
    roomId?: string;
    roomName?: string;
    memberCount?: number;
  };
};

const KakaoTalkShareButton = ({
  children,
  templateId,
  templateArgs = {
    roomId: "",
    roomName: "",
    memberCount: 0,
  },
  ...props
}: PropsWithChildren<KakaoTalkShareButtonProps>) => {
  const onClickShareButton = () => {
    if (!window.Kakao) return;

    if (templateId === KAKAO_TEMPLATE_IDS.START_INPUT) {
      window.Kakao.Share.sendCustom({
        templateId,
      });
    } else {
      window.Kakao.Share.sendCustom({
        templateId,
        templateArgs,
      });
    }
  };

  useEffect(() => {
    if (window.Kakao.isInitialized()) return;

    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
  }, []);

  return (
    <Button
      onClick={onClickShareButton}
      className={textRecipe({ variant: "title3" })}
      {...props}
    >
      {children}
    </Button>
  );
};

export default KakaoTalkShareButton;
