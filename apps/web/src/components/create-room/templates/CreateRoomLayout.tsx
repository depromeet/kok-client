"use client";

import type {
  ICreateRoomValues,
  IRaondomProfile,
} from "@/api/types/create-room/index.type";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ProgressBar } from "@repo/ui/components";
import CreateRoomProfile from "../organisms/create-room-profile/CreateRoomProfile";
import CreateRoomPeople from "../organisms/create-room-people/CreateRoomPeople";
import SelectStartPlace from "../organisms/select-start-place/SelectStartPlace";
import CreateRoomName from "../organisms/create-room-name/CreateRoomName";
import { useCreateRoom } from "@/hooks/api/useCreateRoom";
import { useMoveVisualViewportTop } from "@/hooks/useMoveVisualViewportTop";

import * as Style from "./style.css";

const CreateRoomLayout = ({
  randomProfile,
}: {
  randomProfile: IRaondomProfile;
}) => {
  const router = useRouter();

  const [createRoomValues, setCreateRoomValues] = useState<
    Partial<ICreateRoomValues>
  >({
    step: 1,
  });

  const { mutateAsync, data } = useCreateRoom({
    onError: () => {
      alert("방 생성 중 알 수 없는 오류가 발생했습니다.");
      router.replace("/");
    },
  });

  const updateRoomValues = useCallback(
    (newValues: Partial<ICreateRoomValues>) => {
      setCreateRoomValues((prevValues) => ({
        ...prevValues,
        ...newValues,
        step: Math.min(lastStep, (prevValues.step ?? 1) + 1),
      }));
    },
    []
  );

  useEffect(() => {
    if (createRoomValues.step === 4) {
      mutateAsync({
        roomName: createRoomValues.roomName!,
        capacity: createRoomValues.capacity!,
        hostProfile: createRoomValues.hostProfile!,
        hostNickname: createRoomValues.hostNickname!,
      });
    }
  }, [createRoomValues, mutateAsync]);

  const handleRoomName = (roomName: string) => updateRoomValues({ roomName });

  const handleRoomProfile = (hostProfile: string, hostNickname: string) =>
    updateRoomValues({ hostProfile, hostNickname });

  const handleRoomPeople = (capacity: number) => updateRoomValues({ capacity });

  const lastStep = 4;

  useMoveVisualViewportTop();

  return (
    <div className={Style.containerStyle}>
      <ProgressBar
        step={createRoomValues.step ?? 1}
        lastStep={lastStep}
        backgroundTransparent={createRoomValues.step !== lastStep}
      />

      {createRoomValues.step === 1 && (
        <CreateRoomName onNext={handleRoomName} />
      )}
      {createRoomValues.step === 2 && (
        <CreateRoomProfile
          onNext={handleRoomProfile}
          randomProfile={randomProfile}
        />
      )}
      {createRoomValues.step === 3 && (
        <CreateRoomPeople
          roomName={createRoomValues?.roomName}
          onNext={handleRoomPeople}
        />
      )}
      {createRoomValues.step === 4 && data && (
        <SelectStartPlace
          roomId={data.data.id}
          memberId={data.data.member.id}
          memberImgUrl={data.data.member.profile}
        />
      )}
    </div>
  );
};

export default CreateRoomLayout;
