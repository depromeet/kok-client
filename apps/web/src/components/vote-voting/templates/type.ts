export interface Candidate {
  stationId: number;
  stationName: string;
  totalTime: number;
  transferCount: number;
  routes: string[];
  coments: {
    memberId: string;
    imageUrl: string;
    comment: string;
  }[];
}
