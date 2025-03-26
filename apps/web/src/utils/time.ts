export function secondsToTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes}`;
}
