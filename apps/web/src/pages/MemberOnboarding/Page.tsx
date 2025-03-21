"use client";

import MemberOnboarding from "@/components/member-onboarding";
import { useRoomInfo } from "@/hooks/api/useRoomInfo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
  roomId: string;
}

export default function Page({ roomId }: Props) {
  const router = useRouter();
  const { data, isError } = useRoomInfo(roomId);

  useEffect(() => {
    if (isError) router.push("/");
  }, [router, isError]);

  return (
    data && <MemberOnboarding roomId={roomId} roomName={data.data.roomName} />
  );
}
