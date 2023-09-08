import React from 'react';

interface HelperTextProps {
  className?: string;
  children?: React.ReactNode;
}

const HelperText: React.FC<HelperTextProps> = ({ className, children }) => {
    return(
        <div className={`text-slate-400 ${className}`}>{children}</div>
    )
}

export type {
  HelperTextProps,
}

export {
  HelperText,
}

export default HelperText;