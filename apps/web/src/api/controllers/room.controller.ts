/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ICreateRoom,
  TCompleteCreateRoom,
} from "../types/create-room/index.type";
import type { IJoinRoom } from "../types/participate-room";

import { postRequest } from "@repo/shared/axios";
import { API_URLS } from "../../constants/api";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class RoomController {
  private static instance: RoomController;

  private constructor() {}

  public static getInstance(): RoomController {
    if (!RoomController.instance) {
      RoomController.instance = new RoomController();
    }
    return RoomController.instance;
  }

  private handleError(operation: string, error: any): never {
    console.error(`${operation} 오류 발생:`, error);
    throw error;
  }

  public async postCreateRoom(roomValues: ICreateRoom) {
    try {
      return await postRequest<TCompleteCreateRoom, ICreateRoom>({
        url: `${BASE_URL}${API_URLS.POST_CREATE_ROOM}`,
        data: roomValues,
      });
    } catch (error: any) {
      this.handleError("postCreateRoom", error);
    }
  }

  public async postJoinRoom(roomId: string, memberValues: IJoinRoom) {
    try {
      return await postRequest<TCompleteCreateRoom, IJoinRoom>({
        url: `${BASE_URL}${API_URLS.POST_JOIN_ROOM(roomId)}`,
        data: memberValues,
      });
    } catch (error: any) {
      this.handleError("postJoinRoom", error);
    }
  }
}

export default RoomController.getInstance();
