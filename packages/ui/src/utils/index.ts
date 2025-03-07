export const veMerge = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join("");
