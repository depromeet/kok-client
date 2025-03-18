import { theme } from "../tokens";

interface DeleteIconProps {
  color?: string;
  onClick?: () => void;
}

export const DeleteIcon = ({
  color = theme.colors.gray50,
  onClick,
}: DeleteIconProps) => {
  return (
    <div onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
      >
        <g clipPath="url(#clip0_1424_38010)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.0013 23.3346C19.156 23.3346 23.3346 19.156 23.3346 14.0013C23.3346 8.84664 19.156 4.66797 14.0013 4.66797C8.84664 4.66797 4.66797 8.84664 4.66797 14.0013C4.66797 19.156 8.84664 23.3346 14.0013 23.3346ZM16.9532 16.9534C17.2949 16.6116 17.2949 16.0576 16.9532 15.7159L15.2387 14.0014L16.9535 12.2867C17.2952 11.945 17.2952 11.391 16.9535 11.0493C16.6118 10.7075 16.0578 10.7075 15.716 11.0493L14.0013 12.764L12.2866 11.0493C11.9448 10.7075 11.3908 10.7075 11.0491 11.0493C10.7074 11.391 10.7074 11.945 11.0491 12.2867L12.7639 14.0014L11.0494 15.7159C10.7077 16.0576 10.7077 16.6116 11.0494 16.9534C11.3911 17.2951 11.9451 17.2951 12.2868 16.9534L14.0013 15.2389L15.7158 16.9534C16.0575 17.2951 16.6115 17.2951 16.9532 16.9534Z"
            fill="#1D1D1D"
            fillOpacity="0.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1424_38010">
            <rect width="28" height="28" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};
