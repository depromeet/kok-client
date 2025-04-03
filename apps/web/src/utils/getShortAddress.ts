export const getShortAddress = (fullAddress: string): string => {
  const match = fullAddress.match(
    /([가-힣]+구|[가-힣]+군)\s([가-힣]+동|[가-힣]+읍|[가-힣]+면)/
  );

  if (match) {
    return `${match[1]} ${match[2]}`;
  }

  return fullAddress.split(" ").slice(0, 2).join(" ");
};
