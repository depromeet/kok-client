import { create } from "zustand";

interface useMemberStoreType {
  memberId: string;
  nikname: string;
  profile: string;

  setMemberId: (payload: string) => void;
  setNickname: (payload: string) => void;
  setProfile: (payload: string) => void;
}

export const useMemberStore = create<useMemberStoreType>((set) => ({
  memberId: "",
  nikname: "",
  profile: "",
  step: 2,
  setMemberId: (payload: string) =>
    set(() => ({
      memberId: payload,
    })),
  setNickname: (payload: string) =>
    set(() => ({
      nikname: payload,
    })),
  setProfile: (payload: string) =>
    set(() => ({
      profile: payload,
    })),
}));
