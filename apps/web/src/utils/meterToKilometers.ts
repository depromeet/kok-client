export function metersToKilometersString(meters: number): string {
  const kilometers = (meters / 1000).toFixed(1);
  return `${kilometers} km`;
}
