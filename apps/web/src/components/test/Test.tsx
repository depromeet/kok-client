"use client";

import { useGetTestData } from "@/hooks/api/mocks/useGetTestData";
import { usePostTestData } from "@/hooks/api/mocks/usePostTestData";
import React, { useState, useCallback, useMemo } from "react";

const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const { testData, isLoading } = useGetTestData(currentIndex);

  const onSuccess = useCallback(() => {
    alert("새로운 데이터가 생성되었습니다!");
  }, []);

  const { createData, isCreating } = usePostTestData(currentIndex, onSuccess);

  const handleClick = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const handleSubmit = useCallback(() => {
    const newPost = {
      userId: 101,
      id: 123123,
      title: "새로운 포스트",
      body: "이것은 새로운 게시물입니다.",
    };

    createData(newPost);
  }, [createData]);

  const loadingTextStyle = useMemo(
    () => ({ backgroundColor: "#ddd", padding: "4px 8px" }),
    []
  );

  return (
    <div>
      <div>
        현재 글 제목 :{" "}
        {isLoading ? (
          <span style={loadingTextStyle}>...</span>
        ) : (
          <span>{testData?.title}</span>
        )}
      </div>
      <button onClick={handleClick}>다음글</button>
      <button onClick={handleSubmit} disabled={isCreating}>
        {isCreating ? "업로드 중..." : "새 데이터 추가"}
      </button>
    </div>
  );
};

export default Test;
