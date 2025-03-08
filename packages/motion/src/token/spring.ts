export type SpringToken = "slow";

export type Spring = {
  stiffness: number;
  damping: number;
  mass: number;
};

export const spring: Record<SpringToken, Spring> = {
  slow: { mass: 0.2, stiffness: 26.7, damping: 4.1 },
} as const;
