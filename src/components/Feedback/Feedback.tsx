import React from 'react';

type FeedbackProps = {
  message: string;
  type?: 'success' | 'error' | 'info';
};

export const Feedback: React.FC<FeedbackProps> = ({ message, type = 'info' }) => {
  let bgColor = '';

  switch (type) {
    case 'success':
      bgColor = 'lightgreen';
      break;
    case 'error':
      bgColor = 'lightcoral';
      break;
    case 'info':
    default:
      bgColor = 'lightblue';
      break;
  }

  const style = {
    padding: '1rem',
    borderRadius: '4px',
    backgroundColor: bgColor,
    color: '#333',
    fontSize: '1rem',
    marginBottom: '1rem',
  };

  return <div style={style}>{message}</div>;
};
