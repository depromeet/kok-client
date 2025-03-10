"use client";

import { Button } from "@repo/ui/components";
import { useEffect } from "react";

const MESSAGE_TEMPLATE_START_INPUT = 117720;

export function Page() {
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
    <Button variant="secondary" onClick={onClickShareButton}>
      링크 공유하기
    </Button>
  );
}
