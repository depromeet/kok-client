import { ProfileItem } from "./ProfileItem";
import * as Style from "./ProfileList.css";
import { TUserStatus } from "@/api/types/vote/index.type";

interface Props {
  selectedProfileId?: string;
  profileList?: TUserStatus[]; // 선택적으로 만듦
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
          key={profile.memberId}
          onClick={() => {
            if (!profile.isVoted) {
              onProfileClick(profile.memberId);
            }
          }}
        >
          <ProfileItem
            selected={profile.memberId === selectedProfileId}
            {...profile}
          />
        </li>
      ))}
    </ul>
  );
}
