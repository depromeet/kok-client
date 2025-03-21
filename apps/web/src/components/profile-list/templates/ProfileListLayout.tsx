"use client";

import type { IMemberProfile } from "@/api/types/profile-list/index.types";

import ProfileListHeader from "../organisms/profile-list-header/ProfileListHeader";
import ProfileListFooter from "../organisms/profile-list-footer/ProfileListFooter";
import ProfileListContent from "../organisms/profile-list-content/ProfileListContent";

import { containerStyle } from "./style.css";
import { Flex } from "@repo/ui/components";

interface IProfileListLayoutProps {
  profileData: IMemberProfile[];
}

const ProfileListLayout = ({ profileData }: IProfileListLayoutProps) => {
  return (
    <Flex direction="column" className={containerStyle}>
      <ProfileListHeader />
      <ProfileListContent profileData={profileData} />
      <ProfileListFooter />
    </Flex>
  );
};

export default ProfileListLayout;
