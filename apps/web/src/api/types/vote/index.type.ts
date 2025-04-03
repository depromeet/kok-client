export interface IGetUserStatus {
  roomId: string;
}

export interface TUserStatus {
  memberId: string;
  nickname: string;
  imageUrl: string;
  isVoted: true;
  address: string;
}
