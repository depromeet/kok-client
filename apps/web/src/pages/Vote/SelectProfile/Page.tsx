"use client";

import { useState } from "react";
import { VoteSelectProfile } from "@/components/vote-select-profile/templates/VoteSelectProfile";
import { VoteVotingLayout } from "@/components/vote-voting/templates/VoteVotingLayout";
import { VoteFinishTemplate } from "@/components/vote-finish/templates/VoteFinishTemplate";

export default function Page() {
  const [funnel, setFunnel] = useState<"select-profile" | "voting" | "finish">(
    "select-profile"
  );
  const [selectedMemberId, setSelectedMemberId] = useState<string>();

  if (funnel === "select-profile") {
    return (
      <VoteSelectProfile
        selectedMemberId={selectedMemberId}
        onNext={() => setFunnel("voting")}
        onSelectMemberId={setSelectedMemberId}
      />
    );
  }
  if (funnel === "voting") {
    return <VoteVotingLayout onNext={() => setFunnel("finish")} />;
  }

  return <VoteFinishTemplate onRevote={() => setFunnel("voting")} />;
}
