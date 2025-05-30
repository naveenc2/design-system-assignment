import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput',
  component: TextInput,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        label="Your Name"
        placeholder="Enter your name"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const WithError: Story = {
  render: () => {
    const [value, setValue] = useState('');
    return (
      <TextInput
        label="Email"
        placeholder="Enter your email"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        error="This field is required"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <TextInput
      label="Disabled Field"
      placeholder="Can't type here"
      value=""
      onChange={() => {}}
      disabled
    />
  ),
};
