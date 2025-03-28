"use client";

import type { IRaondomProfile } from "@/api/types/create-room/index.type";
import type { IJoinRoom } from "@/api/types/join-room";

import { ProgressBar } from "@repo/ui/components";
import { useCallback, useEffect, useState } from "react";
import { containerStyle } from "./style.css";
import CreateProfile from "../organisms/create-profile/CreateProfile";
import { useMoveVisualViewportTop } from "@/hooks/useMoveVisualViewportTop";
import { useJoinRoom } from "@/hooks/api/useJoinRoom";
import { useParams, useRouter } from "next/navigation";
import SelectStartPlace from "@/components/create-room/organisms/select-start-place/SelectStartPlace";

interface IJoinRoomLayoutProps {
  randomProfile: IRaondomProfile;
}

const JoinRoomLayout = ({ randomProfile }: IJoinRoomLayoutProps) => {
  const router = useRouter();
  const params = useParams();
  const roomId = params?.roomId;

  const [step, setStep] = useState(1);
  const lastStep = 2;

  const [profileValue, setProfileValue] = useState<IJoinRoom>({
    profile: randomProfile.imageUrl,
    nickname: randomProfile.nickname,
  });

  const { mutateAsync, data } = useJoinRoom({
    onError: () => {
      alert("방 참여 중 알 수 없는 오류가 발생했습니다.");
      router.replace("/");
    },
  });

  console.log(data);

  const handleJoinRoom = useCallback(() => {
    mutateAsync({
      roomId: roomId as string,
      profileValue,
    });
  }, [mutateAsync, profileValue, roomId]);

  useEffect(() => {
    if (step === 2) {
      handleJoinRoom();
    }
  }, [step, handleJoinRoom]);

  useMoveVisualViewportTop();

  return (
    <div className={containerStyle}>
      <ProgressBar
        step={step ?? 1}
        lastStep={lastStep}
        backgroundTransparent={step !== lastStep}
      />

      {step === 1 && (
        <CreateProfile
          randomProfile={randomProfile}
          setStep={setStep}
          profileValue={profileValue}
          setProfileValue={setProfileValue}
        />
      )}
      {step === 2 && data && roomId && (
        <SelectStartPlace
          roomId={roomId as string}
          memberImgUrl={data.data.profile}
          memberId={data.data.id}
        />
      )}
    </div>
  );
};

export default JoinRoomLayout;
