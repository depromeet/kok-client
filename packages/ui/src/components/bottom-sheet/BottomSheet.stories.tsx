import { Meta, StoryObj } from "@storybook/react";
import { BottomSheet } from "./index";
import { Button } from "../button";
import { useState } from "react";

const meta: Meta = {
  title: "components/BottomSheet",
  component: BottomSheet,
};

export default meta;

export const PinInMap: StoryObj = {
  name: "BottomSheet",
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>바텀싯 열기</Button>
        <BottomSheet open={open} onClose={() => setOpen(false)}>
          버튼
        </BottomSheet>
      </>
    );
  },
};
