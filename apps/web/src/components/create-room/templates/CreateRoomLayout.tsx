"use client";

import type {
  ICreateRoomValues,
  IRaondomProfile,
} from "@/api/types/create-room/index.type";

import { useState, useCallback, useMemo } from "react";
import { ProgressBar } from "@repo/ui/components";
import * as Style from "./style.css";
import CreateRoomName from "../organisms/create-room-name/CreateRoomName";
import CreateRoomProfile from "../organisms/create-room-profile/CreateRoomProfile";
import CreateRoomPeople from "../organisms/create-room-people/CreateRoomPeople";
import SelectStartPlace from "../organisms/select-start-place/SelectStartPlace";

const CreateRoomLayout = ({
  randomProfile,
}: {
  randomProfile: IRaondomProfile;
}) => {
  const [createRoomValues, setCreateRoomValues] = useState<
    Partial<ICreateRoomValues>
  >({
    step: 1,
  });

  const updateRoomValues = useCallback(
    (newValues: Partial<ICreateRoomValues>) => {
      setCreateRoomValues((prevValues) => ({
        ...prevValues,
        ...newValues,
        step: (prevValues.step ?? 1) + 1,
      }));
    },
    []
  );

  const handleRoomName = (roomName: string) => updateRoomValues({ roomName });

  const handleRoomProfile = (hostProfile: string, hostNickname: string) =>
    updateRoomValues({ hostProfile, hostNickname });

  const handleRoomPeople = (capacity: number) => updateRoomValues({ capacity });

  const lastStep = 4;

  const backgroundImage = useMemo(() => "/images/blur4.png", []); //todo : 배경 이미지 논의

  return (
    <div
      className={Style.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
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
        <CreateRoomPeople onNext={handleRoomPeople} />
      )}
      {createRoomValues.step === 4 && <SelectStartPlace />}
    </div>
  );
};

export default CreateRoomLayout;
