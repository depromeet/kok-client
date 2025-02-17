"use client";

import React from "react";
import { useGetTestData } from "@/hooks/api/useGetTestData";

const Test = () => {
  const { testData, isLoading } = useGetTestData();

  if (isLoading) return;

  return (
    <div>{testData && <pre>{JSON.stringify(testData, null, 2)}</pre>}</div>
  );
};

export default Test;
