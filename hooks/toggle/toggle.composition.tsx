import React from 'react';
import { useToggle } from './toggle';

export const PrimaryToggle = () => {
  const { toggleValue, toggler } = useToggle(false);

  return (
    <>
      <h1>Enabled : {toggleValue ? 'Yes Sir!' : 'Nope!'}</h1>
      <button onClick={toggler}>Toggle</button>
    </>
  );
};
