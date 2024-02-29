import type { Meta, StoryObj } from '@storybook/react'

import Accordion from './index'

const meta = {
  title: 'Example/Accordion',
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (args) => (
    <Accordion.Root {...args}>
      {new Array(5).fill(null).map((_, i) => {
        return (
          <Accordion.Item id={i}>
            <Accordion.Trigger>Trigger {i}</Accordion.Trigger>
            <Accordion.Content>Some content {i}</Accordion.Content>
          </Accordion.Item>
        )
      })}
    </Accordion.Root>
  ),
}
