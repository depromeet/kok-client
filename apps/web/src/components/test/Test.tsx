"use client";

import React, { useState, useCallback } from "react";
import { useGetTestData } from "@/hooks/api/useGetTestData";

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const { testData, isLoading } = useGetTestData(currentIndex);

  const handleClick = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  return (
    <div>
      <div>
        현재 글 제목 :{" "}
        {isLoading ? (
          <span style={{ backgroundColor: "#ddd", padding: "4px 8px" }}>
            ...
          </span>
        ) : (
          <span>{testData?.title}</span>
        )}
      </div>
      <button onClick={handleClick}>다음글</button>
    </div>
  );
};

export default Test;
