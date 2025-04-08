"use client";

import { Button, textRecipe, type ButtonProps } from "@repo/ui/components";
import { PropsWithChildren, useEffect } from "react";

type KakaoTalkShareButtonProps = ButtonProps & {
  templateId?: number;
  templateArgs?: {
    roomId?: string;
  };
  className?: string;
  variant?: string;
};

const KakaoTalkShareButton = ({
  children,
  templateId,
  templateArgs = {
    roomId: "",
  },
  variant = "gradient-loop",
  ...props
}: PropsWithChildren<KakaoTalkShareButtonProps>) => {
  const handleClickShareButton = () => {
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
      {...props}
      variant={variant}
      width={variant === "share-icon" ? "fit" : "full"}
      onClick={handleClickShareButton}
      className={textRecipe({ variant: "title3" })}
    >
      {children}
    </Button>
  );
};

export default KakaoTalkShareButton;
