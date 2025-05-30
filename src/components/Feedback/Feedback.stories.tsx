import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Feedback } from './Feedback';

const meta: Meta<typeof Feedback> = {
  title: 'Components/Feedback',
  component: Feedback,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Feedback>;

export const Info: Story = {
  args: {
    message: 'This is an info message.',
    type: 'info',
  },
};

export const Success: Story = {
  args: {
    message: 'Operation successful!',
    type: 'success',
  },
};

export const Error: Story = {
  args: {
    message: 'Something went wrong.',
    type: 'error',
  },
};
