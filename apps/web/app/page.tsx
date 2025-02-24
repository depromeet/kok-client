import React from "react";
import Test from "@/components/test/Test";
import { NaverMap } from "@repo/ui/map";

const Page = () => {
  return (
    <div>
      <Test />
      <NaverMap width="500px" height="700px" />
    </div>
  );
};

export default Page;
