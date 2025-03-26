"use client";

import type { IProfileData } from "@/api/types/profile-list/index.types";

import { useState } from "react";
import { Flex } from "@repo/ui/components";
import ProfileListHeader from "../organisms/profile-list-header/ProfileListHeader";
import ProfileListFooter from "../organisms/profile-list-footer/ProfileListFooter";
import ProfileListContent from "../organisms/profile-list-content/ProfileListContent";

import { containerStyle } from "./style.css";

interface IProfileListLayoutProps {
  profileData: IProfileData;
}

const ProfileListLayout = ({ profileData }: IProfileListLayoutProps) => {
  const [currentMemberId, setCurrentMemberId] = useState("");

  return (
    <Flex direction="column" className={containerStyle}>
      <ProfileListHeader />
      <ProfileListContent
        profileData={profileData}
        currentMemberId={currentMemberId}
        setCurrentMemberId={setCurrentMemberId}
      />
      <ProfileListFooter currentMemberId={currentMemberId} />
    </Flex>
  );
};

export default ProfileListLayout;
