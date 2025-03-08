"use client";
import RefreshIcon from "@/assets/icons/RefreshIcon";
import { Text } from "../../../../packages/ui/src/components/text";
import { useState } from "react";
import GreyDivider from "@/assets/icons/GreyDivider";

const RefreshCenterButton = () => {
  const [centerStation, setCenterStation] = useState<string>("강남역");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        height: "36px",
        borderRadius: "100px",
        padding: "12px",
        cursor: "pointer",
      }}
    >
      <RefreshIcon />
      <Text style={{ margin: "0 8px 0 10px", fontSize: "14px" }}>
        현재 중간 장소
      </Text>
      <GreyDivider />
      <Text style={{ marginLeft: "8px", fontSize: "14px" }}>
        {centerStation}
      </Text>
    </div>
  );
};

export default RefreshCenterButton;
