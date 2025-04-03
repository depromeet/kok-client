"use client";

import { Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import * as styles from "./styles.css";
import BackIcon from "@/assets/icons/BackIcon";
import { useRouter } from "next/navigation";

interface MapHeaderProps {
  title: string | React.ReactNode;
  isFinal?: boolean;
}

const MapHeader = ({ title, isFinal }: MapHeaderProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.headerStyle}>
        {isFinal !== false && (
          <div onClick={handleBack} className={styles.backBtnStyle}>
            <BackIcon />
          </div>
        )}
        <div className={styles.titleStyle}>
          <Text variant="title3" color={theme.colors.gray95}>
            {title}
          </Text>
        </div>
      </div>
    </>
  );
};

export default MapHeader;
