export interface IProfileData {
  isFull: boolean;
  members: IMemberProfile[];
}

export interface IMemberProfile {
  memberId: string;
  profile: string;
  nickname: string;
  role: string;
}
