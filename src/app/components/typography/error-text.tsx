import React from 'react';

interface ErrorTextProps {
  styleClass?: string;
  children: React.ReactNode;
}

const ErrorText: React.FC<ErrorTextProps> = ({ styleClass, children }) => {
  return (
    <p className={`text-center  text-error ${styleClass}`}>{children}</p>
  );
}

export type {
  ErrorTextProps,
};

export { 
  ErrorText,
};

export default ErrorText;