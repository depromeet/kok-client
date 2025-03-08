import { theme } from "@repo/ui/tokens";

const GreyDivider = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2"
      height="14"
      viewBox="0 0 2 14"
      fill="none"
    >
      <path d="M1 0V14" stroke={theme.colors.gray10} />
    </svg>
  );
};

export default GreyDivider;
