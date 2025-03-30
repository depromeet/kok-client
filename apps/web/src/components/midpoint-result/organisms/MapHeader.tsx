"use client";

import { Text } from "@repo/ui/components";
import BackIcon from "@/assets/icons/BackIcon";
import { theme } from "@repo/ui/tokens";
import { useRouter } from "next/navigation";
import * as styles from "./styles.css";

interface MapHeaderProps {
  title: string | React.ReactNode;
}

const MapHeader = ({ title }: MapHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.headerStyle}>
        <div className={styles.backBtnStyle} onClick={() => router.back()}>
          <BackIcon />
        </div>
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
