import { DummyProfile } from "../templates/dummy";
import { ProfileItem } from "./ProfileItem";
import * as Style from "./ProfileList.css";

interface Props {
  selectedProfileId?: string;
  profileList?: DummyProfile[]; // 선택적으로 만듦
  onProfileClick: (id: string) => void;
}

export function ProfileList({
  profileList = [],
  selectedProfileId,
  onProfileClick,
}: Props) {
  return (
    <ul className={Style.list}>
      {profileList.map((profile) => (
        <li
          key={profile.id}
          onClick={() => {
            if (!profile.voted) {
              onProfileClick(profile.id);
            }
          }}
        >
          <ProfileItem
            selected={profile.id === selectedProfileId}
            {...profile}
          />
        </li>
      ))}
    </ul>
  );
}
