import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta = {
  title: "components/Button",
  component: Button,
};

export default meta;

export const PinInMap: StoryObj = {
  name: "Button",
  render: () => <Button>버튼</Button>,
};
