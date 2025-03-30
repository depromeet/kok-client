/**
 * API 요청을 위한 URL 상수 정의
 */

export const API_URLS = {
  GET_CONVEXHULL: "/locations/ConvH/",
  GET_CENTROID: "/locations/centroid/",
  GET_LOCATION: "/locations/",
  GET_RANDOM_PROFILE: "/rooms/profile/random",
  POST_CREATE_ROOM: "/rooms",
  GET_ROOM_INFO: "/rooms",
  POST_ROUTE: "/route/",
  POST_ROUTE_COMPLEX: "/route/complex/",
  GET_RECOMMEND_STATION: "/stations/recommend/",
  POST_JOIN_ROOM: (roomId: string) => `/rooms/${roomId}/join`,

  // vote
  GET_USER_VOTE_STATUS: (roomId: string) => `/vote/${roomId}/status`,
  GET_VOTE_DEADLINE: (roomId: string) => `/vote/${roomId}/deadline`,
};
