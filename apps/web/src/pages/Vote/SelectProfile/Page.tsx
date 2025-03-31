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

  console.log(funnel, selectedMemberId);
  if (funnel === "select-profile") {
    return (
      <VoteSelectProfile
        selectedMemberId={selectedMemberId}
        onNext={() => setFunnel("voting")}
        onSelectMemberId={setSelectedMemberId}
      />
    );
  }

  if (selectedMemberId == null) {
    return <>error</>;
  }

  if (funnel === "voting") {
    return (
      <VoteVotingLayout
        memberId={selectedMemberId}
        onNext={() => setFunnel("finish")}
      />
    );
  }

  return (
    <VoteFinishTemplate
      memberId={selectedMemberId}
      onRevote={() => setFunnel("voting")}
    />
  );
}
