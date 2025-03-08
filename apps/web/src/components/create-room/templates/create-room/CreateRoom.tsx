"use client";

import type { ICreateRoomValues } from "@/api/types/create-room/index.type";

import { useState } from "react";
import { ProgressBar } from "@repo/ui/components";
import CreateRoomName from "../../organisms/create-room-name/CreateRoomName";
import CreateRoomProfile from "../../organisms/create-room-profile/CreateRoomProfile";
import CreateRoomPeople from "../../organisms/create-room-people/CreateRoomPeople";

const CreateRoom = () => {
  const lastStep = 4; // 최대 단계 설정
  const [createRoomValues, setCreateRoomValues] = useState<
    Partial<ICreateRoomValues>
  >({
    step: 1,
  });

  const step = createRoomValues.step ?? 0; // step 값이 없을 경우 기본값 0

  return (
    <>
      <ProgressBar step={step} lastStep={lastStep} />

      {/* {step === 0 && (
        <CreateRoomName
          onNext={() => setCreateRoomValues({ step: step + 1 })}
        />
      )}
      {step === 1 && (
        <CreateRoomProfile
          onNext={() => setCreateRoomValues({ step: step + 1 })}
        />
      )}
      {step === 2 && (
        <CreateRoomPeople
          onNext={() => setCreateRoomValues({ step: step + 1 })}
        />
      )} */}

      {/* todo: step === lastStep 일때 준영 형 컴포넌트 불러오기 */}
    </>
  );
};

export default CreateRoom;
