interface DeleteIconProps {
  disabled?: boolean;
}

export const DeleteIcon = ({ disabled = false }: DeleteIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      <g clipPath="url(#clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9.46967 14.5303C9.17678 14.2374 9.17678 13.7626 9.46967 13.4697L10.9393 12L9.46969 10.5303C9.1768 10.2374 9.1768 9.76256 9.46969 9.46967C9.76258 9.17678 10.2375 9.17678 10.5303 9.46967L12 10.9393L13.4697 9.46967C13.7626 9.17678 14.2374 9.17678 14.5303 9.46967C14.8232 9.76256 14.8232 10.2374 14.5303 10.5303L13.0607 12L14.5303 13.4697C14.8232 13.7626 14.8232 14.2374 14.5303 14.5303C14.2375 14.8232 13.7626 14.8232 13.4697 14.5303L12 13.0606L10.5303 14.5303C10.2374 14.8232 9.76256 14.8232 9.46967 14.5303Z"
          fill={disabled ? "#DBDBDB" : "#6D6D6D"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
