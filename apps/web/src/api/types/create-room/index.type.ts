export interface ICreateRoom {
  roomName: string;
  capacity: number;
  hostProfile: string;
  hostNickname: string;
  password: string;
}

export interface ICreateRoomValues extends ICreateRoom {
  step: number;
}
