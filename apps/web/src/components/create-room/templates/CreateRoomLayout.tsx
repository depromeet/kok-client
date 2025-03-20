import type {
  ICompleteCreateRoom,
  ICreateRoom,
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
import { usePostTestData } from "@/hooks/api/useCreateRoom";

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

  const [completeRoomDetails, setCompleteRoomDetails] =
    useState<null | ICompleteCreateRoom>(null);

  const { mutateAsync } = usePostTestData({
    onError: () => {
      alert("방 생성 중 알 수 없는 오류가 발생했습니다.");
      router.push("/");
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
      } as ICreateRoom).then((response) => {
        setCompleteRoomDetails(response.data);
      });
    }
  }, [createRoomValues, mutateAsync]);

  const handleRoomName = (roomName: string) => updateRoomValues({ roomName });

  const handleRoomProfile = (hostProfile: string, hostNickname: string) =>
    updateRoomValues({ hostProfile, hostNickname });

  const handleRoomPeople = (capacity: number) => updateRoomValues({ capacity });

  const lastStep = 4;

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
      {createRoomValues.step === 4 && completeRoomDetails && (
        <SelectStartPlace
          roomId={completeRoomDetails.id}
          profileId={completeRoomDetails.member.id}
          profile={completeRoomDetails.member.profile}
          nickname={completeRoomDetails.member.nickname}
        />
      )}
    </div>
  );
};

export default CreateRoomLayout;
