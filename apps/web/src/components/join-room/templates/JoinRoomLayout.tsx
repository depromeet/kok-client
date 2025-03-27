"use client";

import type { IRaondomProfile } from "@/api/types/create-room/index.type";

import { ProgressBar } from "@repo/ui/components";
import { useState } from "react";
import { containerStyle } from "./style.css";
import CreateProfile from "../organisms/create-profile/CreateProfile";
import { useMoveVisualViewportTop } from "@/hooks/useMoveVisualViewportTop";

interface IJoinRoomLayoutProps {
  randomProfile: IRaondomProfile;
}

const JoinRoomLayout = ({ randomProfile }: IJoinRoomLayoutProps) => {
  const [step, setStep] = useState(1);
  const lastStep = 2;

  useMoveVisualViewportTop();

  return (
    <div className={containerStyle}>
      <ProgressBar
        step={step ?? 1}
        lastStep={lastStep}
        backgroundTransparent={step !== lastStep}
      />

      {step === 1 && (
        <CreateProfile randomProfile={randomProfile} setStep={setStep} />
      )}
      {step === 2 && <div>소정아 할거 해라</div>}
    </div>
  );
};

export default JoinRoomLayout;
