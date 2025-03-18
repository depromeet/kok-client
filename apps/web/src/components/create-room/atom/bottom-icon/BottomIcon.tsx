const BottomIcon = ({ disabled }: { disabled: boolean }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.08844 5.52917C4.34822 5.30187 4.74307 5.32819 4.97037 5.58797L8.00001 9.05041L11.0296 5.58797C11.2569 5.32819 11.6518 5.30187 11.9116 5.52917C12.1713 5.75647 12.1977 6.15132 11.9704 6.4111L8.84666 9.98105C8.39844 10.4933 7.60157 10.4933 7.15336 9.98105L4.02965 6.4111C3.80235 6.15132 3.82867 5.75647 4.08844 5.52917Z"
        fill={disabled ? "#DBDBDB" : "#6D6D6D"}
      />
    </svg>
  );
};

export default BottomIcon;
