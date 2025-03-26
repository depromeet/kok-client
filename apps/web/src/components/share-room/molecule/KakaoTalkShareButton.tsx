"use client";

import { Button, textRecipe, type ButtonProps } from "@repo/ui/components";
import { PropsWithChildren, useEffect } from "react";

type KakaoTalkShareButtonProps = ButtonProps & {
  templateId?: number;
  templateArgs?: {
    roomId?: string;
  };
};

const KakaoTalkShareButton = ({
  children,
  templateId,
  templateArgs = {
    roomId: "",
  },
  ...props
}: PropsWithChildren<KakaoTalkShareButtonProps>) => {
  const onClickShareButton = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendCustom({
      templateId,
      templateArgs,
    });
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
