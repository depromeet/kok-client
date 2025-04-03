"use client";

import { Text } from "@repo/ui/components";
import { theme } from "@repo/ui/tokens";
import * as styles from "./styles.css";

interface MapHeaderProps {
  title: string | React.ReactNode;
}

const MapHeader = ({ title }: MapHeaderProps) => {
  return (
    <>
      <div className={styles.headerStyle}>
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
