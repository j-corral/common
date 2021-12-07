import React from 'react';

export type CapitalizeProps = {
  /**
   * @description uppercase all string
   */
  full?: boolean;
  /**
   * @description The text to Capitalize
   */
  children: string;
};

export function Capitalize({ full = false, children }: CapitalizeProps) {
  let result = '';
  if (typeof children === 'string') {
    if (full === true) {
      result = children.toLocaleUpperCase();
    } else {
      result = children.charAt(0).toUpperCase() + children.slice(1);
    }
  }
  return <>{result}</>;
}
