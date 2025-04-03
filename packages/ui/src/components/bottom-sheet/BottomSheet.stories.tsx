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
        <BottomSheet
          open={open}
          header={
            <div
              style={{ height: "40px", width: "100%", backgroundColor: "red" }}
            ></div>
          }
          onClose={() => setOpen(false)}
        >
          <div
            style={{ height: "100dvh", width: "100%", backgroundColor: "blue" }}
          />
        </BottomSheet>
      </>
    );
  },
};
