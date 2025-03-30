export function getTimeDifferenceInMinutes(serverTime: string): number {
  const serverDate = new Date(serverTime);

  const currentDate = new Date();

  const timeDifferenceMs = serverDate.getTime() - currentDate.getTime();

  const timeDifferenceMinutes = Math.floor(timeDifferenceMs / 1000 / 60);

  return timeDifferenceMinutes;
}
