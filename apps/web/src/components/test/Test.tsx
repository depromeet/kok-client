"use client";

import { useState, useCallback, useMemo } from "react";
import AddIcon from "@/assets/icons/add-icon";
import { useGetTestData } from "@/hooks/api/mocks/useGetTestData";
import { usePostTestData } from "@/hooks/api/mocks/usePostTestData";
import * as Style from "./styles.css";
import { Button } from "@repo/ui/components";
import { Input } from "@repo/ui/components";
import { SearchIcon, DeleteIcon } from "@repo/ui/icons";
const Test = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // 현재 데이터 인덱스
  const { testData, isLoading } = useGetTestData(currentIndex); // 특정 인덱스의 데이터 가져오기

  const onSuccess = useCallback(() => {
    // 데이터 생성 성공 시 알림
    alert("새로운 데이터가 생성되었습니다!");
  }, []);

  const onClickButton = () => {
    alert("Clicked!");
  };

  const { createData, isCreating } = usePostTestData(currentIndex, onSuccess); // 데이터 생성하기

  const handleClick = useCallback(() => {
    // 다음 데이터로 이동
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const handleSubmit = useCallback(() => {
    // 새 데이터 추가
    const newPost = {
      userId: 101,
      id: 123123,
      title: "새로운 포스트",
      body: "이것은 새로운 게시물입니다.",
    };

    createData(newPost);
  }, [createData]);

  const loadingTextStyle = useMemo(
    // 로딩 텍스트 스타일
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
      <button className={Style.nextButton} onClick={handleClick}>
        다음글
      </button>
      <button
        className={Style.addButton}
        onClick={handleSubmit}
        disabled={isCreating}
      >
        {isCreating ? "업로드 중..." : "새 데이터 추가"}
      </button>
      <div style={{ display: "flex", gap: "12px" }}>
        <Input
          variant="rectangular"
          placeholder="이름을 입력해주세요"
          maxLength={10}
          padding="sm"
          width="fit"
          alwaysShowCounter={true}
        />
        <Input
          variant="rounded"
          placeholder="출발지를 입력해주세요"
          rightElement={<SearchIcon />}
          padding="sm"
          width="full"
        />
      </div>
      <Input
        variant="rounded"
        placeholder="이름을 입력해주세요"
        maxLength={10}
        padding="sm"
      />
      <SearchIcon />
      <SearchIcon />
      <DeleteIcon />
      <DeleteIcon />
      <div style={{ display: "flex", gap: "12px" }}>
        <Input
          variant="rectangular"
          width="300px"
          rightElement={<DeleteIcon />}
        />
        <Input variant="rectangular" />
      </div>
      <Input variant="rectangular" width={300} rightElement={<DeleteIcon />} />
      <Button onClick={onClickButton}>text</Button>
      <Button disabled onClick={onClickButton}>
        text
      </Button>
      <Button variant="secondary" onClick={onClickButton}>
        text
      </Button>

      <Button variant="primary" width="auto" padding="sm">
        <AddIcon />
      </Button>
      <Button variant="primary" width="auto" padding="sm" disabled>
        <AddIcon />
      </Button>

      <div style={{ display: "flex", gap: "12px" }}>
        <Button onClick={onClickButton}>text</Button>
        <Button variant="secondary" onClick={onClickButton}>
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijk
        </Button>
      </div>
    </div>
  );
};

export default Test;
