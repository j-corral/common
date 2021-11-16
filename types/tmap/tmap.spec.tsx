import React from 'react';
import { render } from '@testing-library/react';

import { TStringMap } from './tmap';

it('TStringMap should have correct type', () => {
  const Test: TStringMap = new Map<string, string>();

  expect(Test).toBeInstanceOf(Map);
});
