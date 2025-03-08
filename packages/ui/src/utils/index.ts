export const classMerge = (...args: (string | undefined)[]) =>
  args.filter(Boolean).join(" ");
