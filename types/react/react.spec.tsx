import React from 'react';
import { render } from '@testing-library/react';

import { TReactElement, TReactElements } from './react';

it('TReactElement should have correct type', () => {
  const Test: TReactElement = React.createElement('div');

  expect(Test).toBeInstanceOf(Object);
});

it('TReactElements should have correct type', () => {
  const Test: TReactElements = [React.createElement('div')];

  expect(Test).toBeInstanceOf(Array);
});
