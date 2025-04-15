export interface Candidate {
  votedCount: number;
  stationName: string;
  stationId: number;
  resultTag: "CLOSE" | "TOP" | "NONE";
  members: {
    id: string;
    imageUrl: string;
  }[];
}
