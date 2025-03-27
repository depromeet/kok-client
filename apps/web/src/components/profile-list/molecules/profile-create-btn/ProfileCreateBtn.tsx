import { Flex, Text } from "@repo/ui/components";

import {
  BtnLayoutStyle,
  CreateBtnLayoutStyle,
  TooltipBoxStyle,
} from "./style.css";
import { useParams, useRouter } from "next/navigation";

interface IProfileCreateBtnProps {
  isFull: boolean;
}

const ProfileCreateBtn = ({ isFull }: IProfileCreateBtnProps) => {
  const router = useRouter();
  const params = useParams();
  const roomId = params?.roomId;

  const handleClick = () => {
    if (!isFull && roomId) {
      router.push(`/member/${roomId}/profile/join`);
    }
  };

  return (
    <Flex
      direction="column"
      gap={12}
      align="center"
      className={CreateBtnLayoutStyle}
      onClick={handleClick}
    >
      {/* 이미지 */}
      <Flex
        justify="center"
        align="center"
        className={BtnLayoutStyle[isFull ? "full" : "available"]}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M16.9451 24.4853L15.0595 24.4853V16.9428L7.51703 16.9428V15.0572L15.0595 15.0572V7.51472L16.9451 7.51472L16.9451 15.0572L24.4876 15.0572V16.9428L16.9451 16.9428L16.9451 24.4853Z"
            fill="white"
          />
        </svg>
      </Flex>

      {/* 툴팁 */}

      <Flex direction="column" justify="center" align="center" gap={0}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="6"
          viewBox="0 0 12 5"
          fill="none"
        >
          <path
            d="M3.78854 1.41251C4.97755 0.115405 7.02245 0.115403 8.21146 1.4125L11.5 5H0.5L3.78854 1.41251Z"
            fill="white"
          />
        </svg>
        <Flex justify="center" align="center" className={TooltipBoxStyle}>
          <Text variant="caption">프로필이 없다면?</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ProfileCreateBtn;
