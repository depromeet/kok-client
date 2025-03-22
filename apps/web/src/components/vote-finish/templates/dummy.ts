export interface Place {
  confirmed: boolean;
  name: string;
  votedUserImgs: string[];
}

export const dummyPlaceList: Place[] = [
  {
    name: "망원역",
    confirmed: true,
    votedUserImgs: ["1", "2", "3", "4", "5", "6", "7"],
  },
  {
    name: "구로 디지털",
    confirmed: false,
    votedUserImgs: ["8", "9", "10"],
  },
];
