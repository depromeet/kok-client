"use client";

import { ProgressBar } from "@repo/ui/components";
import { useState } from "react";
import { containerStyle } from "./style.css";

const CreateProfileLayout = () => {
  const [step, setStep] = useState(1);
  const lastStep = 2;

  return (
    <div className={containerStyle}>
      <ProgressBar
        step={step ?? 1}
        lastStep={lastStep}
        backgroundTransparent={step !== lastStep}
      />

      {step === 1 && <div>asdasd</div>}
      {step === 2 && <div>asdasd</div>}
    </div>
  );
};

export default CreateProfileLayout;
