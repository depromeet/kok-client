export function secondsToTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}`;
}

export function convertMinutes(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}시간 ${remainingMinutes}분`;
}

export function getTimeDifferenceInMinutes(serverTime: string): number {
  const serverDate = new Date(serverTime);

  const currentDate = new Date();

  const timeDifferenceMs = serverDate.getTime() - currentDate.getTime();

  const timeDifferenceMinutes = Math.floor(timeDifferenceMs / 1000 / 60);

  return timeDifferenceMinutes;
}
