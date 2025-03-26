"use client";

import { Flex, Text, Button, Spacing } from "@repo/ui/components";
import * as Style from "./style.css";
import { ProfileList } from "../organism/ProfileList";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { profileList } from "./dummy";

export function VoteSelectProfile() {
  const router = useRouter();
  const [selectedProfileId, setSelectedProfileId] = useState<string>();

  return (
    <Flex
      justify="between"
      align="center"
      direction="column"
      className={Style.containerStyle}
    >
      {/* 배경 */}
      <div className={Style.backgroundStyle} />

      {/* 위 */}
      <Flex direction="column" align="center">
        <Text variant="heading3" className={Style.titleStyle}>
          투표를 시작해요!
        </Text>
        <div className={Style.scrollArea}>
          <Spacing size="8.2vh" />
          <ProfileList
            profileList={profileList}
            selectedProfileId={selectedProfileId}
            onProfileClick={setSelectedProfileId}
          />
        </div>
      </Flex>

      {/* 아래 */}
      <div className={Style.footerContainerStyle}>
        <Button
          disabled={selectedProfileId == null}
          onClick={() => router.push("/vote/voting")}
        >
          투표 하러가기
        </Button>
      </div>
    </Flex>
  );
}
