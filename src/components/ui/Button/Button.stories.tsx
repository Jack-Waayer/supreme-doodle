import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './index';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Large: Story = {
  args: {
    size: 'lg',
  },
  render: (args) => (<Button { ...args }> Large </Button>)
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
  render: (args) => (<Button { ...args }> Small </Button>)
};
