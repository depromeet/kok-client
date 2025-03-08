export interface ICreateRoom {
  roomName: string;
  capacity: number;
  hostProfile: string;
  hostNickname: string;
}

export interface ICreateRoomValues extends ICreateRoom {
  step: number;
}
