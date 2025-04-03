export interface Candidate {
  stationId: number;
  stationName: string;
  voteStatus: string;
  votedCount: number;
  members: {
    id: string;
    imageUrl: string;
  }[];
}
