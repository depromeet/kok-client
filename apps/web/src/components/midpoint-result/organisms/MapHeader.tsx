"use client";

import { Text } from "@repo/ui/components";
import BackIcon from "@/assets/icons/BackIcon";
import { theme } from "@repo/ui/tokens";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import * as styles from "../style.css";

interface MapHeaderProps {
  children?: ReactNode;
}

const MapHeader = ({ children }: MapHeaderProps) => {
  const router = useRouter();

  return (
    <>
      <div className={styles.headerStyle}>
        <div className={styles.backBtnStyle} onClick={() => router.back()}>
          <BackIcon />
        </div>
        <div className={styles.titleStyle}>
          <Text variant="title3" color={theme.colors.gray95}>
            {children}
          </Text>
        </div>
      </div>
    </>
  );
};

export default MapHeader;
