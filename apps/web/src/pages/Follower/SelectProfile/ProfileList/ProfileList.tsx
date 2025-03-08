"use client";

import { AddButton } from "./AddButton";
import { DummyProfile } from "../dummy";
import { ProfileItem } from "./ProfileItem";
import * as Style from "./ProfileList.css";

interface Props {
  selectedProfileId?: string;
  profileList: DummyProfile[];
  onProfileClick: (id: string) => void;
}

export function ProfileList({
  profileList,
  selectedProfileId,
  onProfileClick,
}: Props) {
  return (
    <ul className={Style.list}>
      <li>
        <AddButton disabled={selectedProfileId != null} />
      </li>
      {profileList.map((profile) => (
        <li key={profile.id} onClick={() => onProfileClick(profile.id)}>
          <ProfileItem
            selected={profile.id === selectedProfileId}
            {...profile}
          />
        </li>
      ))}
    </ul>
  );
}
