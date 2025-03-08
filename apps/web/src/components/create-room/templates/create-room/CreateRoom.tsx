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

  const backgroundImage = () => {
    switch (createRoomValues.step) {
      case 1:
        return "/images/blur4.png";
      case 2:
        return "/images/blur4.png";
      case 3:
        return "/images/blur4.png";
      case 4:
        return "/images/blur4.png";
      default:
        return "/images/blur4.png";
    }
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${backgroundImage()})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
    </div>
  );
};

export default CreateRoom;
