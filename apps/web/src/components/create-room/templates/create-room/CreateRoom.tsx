"use client";

import type { ICreateRoomValues } from "@/api/types/create-room/index.type";

import { useState } from "react";
import { ProgressBar } from "@repo/ui/components";
import CreateRoomName from "../../organisms/create-room-name/CreateRoomName";
import CreateRoomProfile from "../../organisms/create-room-profile/CreateRoomProfile";
import CreateRoomPeople from "../../organisms/create-room-people/CreateRoomPeople";

const CreateRoom = () => {
  const [createRoomValues, setCreateRoomValues] = useState<
    Partial<ICreateRoomValues>
  >({
    step: 1,
  });

  console.log(createRoomValues);

  const handleRoomName = (roomName: string) => {
    setCreateRoomValues((prevValues) => ({
      ...prevValues,
      roomName,
      step: (prevValues.step as number) + 1,
    }));
  };

  const handleRoomProfile = (hostProfile: string, hostNickname: string) => {
    setCreateRoomValues((prevValues) => ({
      ...prevValues,
      hostProfile,
      hostNickname,
      step: (prevValues.step as number) + 1,
    }));
  };

  const handleRoomPeople = (capacity: number) => {
    setCreateRoomValues((prevValues) => ({
      ...prevValues,
      capacity,
      step: (prevValues.step as number) + 1,
    }));
  };

  const lastStep = 4;

  return (
    <>
      <ProgressBar step={createRoomValues.step ?? 1} lastStep={lastStep} />

      {createRoomValues.step === 1 && (
        <CreateRoomName onNext={handleRoomName} />
      )}
      {createRoomValues.step === 2 && (
        <CreateRoomProfile onNext={handleRoomProfile} />
      )}
      {createRoomValues.step === 3 && (
        <CreateRoomPeople onNext={handleRoomPeople} />
      )}
      {createRoomValues.step === 4 && <div>asdasd</div>}

      {/* todo: step === lastStep 일때 준영 형 컴포넌트 불러오기 */}
    </>
  );
};

export default CreateRoom;
