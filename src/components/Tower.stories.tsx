import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tower } from "./Tower";

const meta: Meta<typeof Tower> = {
  title: "Components/Tower",
  component: Tower,
  argTypes: {
    disks: { control: "object" },
    isSelected: { control: "boolean" },
    onTowerClick: { action: "towerClicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Tower>;

export const Empty: Story = {
  args: { disks: [], isSelected: false },
};

export const WithDisks: Story = {
  args: { disks: [3, 2, 1], isSelected: false },
};

export const Selected: Story = {
  args: { disks: [4, 3, 2, 1], isSelected: true },
};
