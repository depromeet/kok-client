"use client";

import AddButton from "./AddButton";
import { DummyProfile } from "../dummy";
import ProfileItem from "./ProfileItem";
import * as Style from "./ProfileList.css";

interface Props {
  selectedProfileId?: string;
  profileList?: DummyProfile[]; // 선택적으로 만듦
  onProfileClick: (id: string) => void;
}

export default function ProfileList({
  profileList = [], // 기본값으로 빈 배열 설정
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
