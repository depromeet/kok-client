import { VoteSelectProfile } from "@/components/vote-select-profile/templates/VoteSelectProfile";
import { useState } from "react";
import { VoteVotingLayout } from "@/components/vote-voting/templates/VoteVotingLayout";
import { VoteFinishTemplate } from "@/components/vote-finish/templates/VoteFinishTemplate";

export default function Page() {
  const [funnel, setFunnel] = useState<
    "select-profile" | "voting" | "finish"
  >();

  if (funnel === "select-profile") {
    return <VoteSelectProfile onNext={() => setFunnel("voting")} />;
  }
  if (funnel === "voting") {
    return <VoteVotingLayout onNext={() => setFunnel("finish")} />;
  }

  return <VoteFinishTemplate onRevote={() => setFunnel("voting")} />;
}
