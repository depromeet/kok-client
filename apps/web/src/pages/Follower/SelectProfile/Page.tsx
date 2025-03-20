"use client";

import { Flex, Spacing, FixedBottomButton } from "@repo/ui/components";
import * as Style from "../../../styles/follower/Page.css";
import ProfileList from "@/pages/Follower/SelectProfile/ProfileList/ProfileList";
import { profileList } from "@/pages/Follower/SelectProfile/dummy";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [selectedProfileId, setSelectedProfileId] = useState<string>();

  return (
    <Flex direction="column" justify="center" className={Style.container}>
      <Spacing size={57} />

      <h1 className={Style.title}>프로필을 선택해주세요</h1>
      <div className={Style.listContainer}>
        <div className={Style.gradient} />
        <div className={Style.scrollArea}>
          <Spacing size={46} />
          <ProfileList
            profileList={profileList}
            selectedProfileId={selectedProfileId}
            onProfileClick={setSelectedProfileId}
          />
          <FixedBottomButton
            variant="primary"
            disabled={selectedProfileId == null}
            style={{
              opacity: selectedProfileId == null ? 0.6 : 1,
            }}
            onClick={() => router.push("/")}
          >
            다음
          </FixedBottomButton>
        </div>
      </div>
    </Flex>
  );
}
