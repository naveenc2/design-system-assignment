import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'label'],
    },
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label'],
    },
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Heading1: Story = {
  args: {
    as: 'h1',
    variant: 'h1',
    children: 'This is an H1 Heading',
  },
};

export const Paragraph: Story = {
  args: {
    as: 'p',
    variant: 'p',
    children: 'This is a paragraph.',
  },
};

export const Label: Story = {
  args: {
    as: 'label',
    variant: 'label',
    children: 'This is a label',
  },
};
