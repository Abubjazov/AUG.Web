import type { Meta, StoryObj } from '@storybook/react'

import MyLists, { MyListsProps } from './MyLists'

import '/src/index.css'

const meta: Meta<MyListsProps> = {
  component: MyLists,
  title: 'UIkit/My Lists',
  parameters: {
    docs: {
      description: {
        component: 'Stub for the MyLists component',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    menuOpened: { description: 'Hiding the list' },
    userStyles: {
      description: 'Passing additional custom styles for root element',
    },
  },
}

export default meta

type Story = StoryObj<MyListsProps>

export const Default: Story = {
  args: {
    menuOpened: true,
  },
}