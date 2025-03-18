const TopIcon = ({ disabled }: { disabled: boolean }) => {
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
        d="M11.9116 10.4708C11.6518 10.6981 11.2569 10.6718 11.0296 10.412L7.99999 6.94959L4.97035 10.412C4.74305 10.6718 4.3482 10.6981 4.08843 10.4708C3.82865 10.2435 3.80233 9.84868 4.02963 9.5889L7.15334 6.01895C7.60155 5.50671 8.39843 5.5067 8.84664 6.01895L11.9704 9.5889C12.1977 9.84868 12.1713 10.2435 11.9116 10.4708Z"
        fill={disabled ? "#DBDBDB" : "#6D6D6D"} // ✅ 15명일 때는 회색, 그 외 검정색 유지
      />
    </svg>
  );
};

export default TopIcon;
