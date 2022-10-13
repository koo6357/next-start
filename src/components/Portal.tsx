import React from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: React.ReactNode;
  selector: string;
}

const Portal = ({ children, selector }: Props) => {
  const element =
    typeof window !== 'undefined' && document.querySelector(selector);
  return element && children ? createPortal(children, element) : null;
};

export default Portal;
