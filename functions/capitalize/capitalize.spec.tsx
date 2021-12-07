import React from 'react';
import { render } from '@testing-library/react';
import { Primary } from './capitalize.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<Primary />);
  const rendered = getByText('Hola');
  expect(rendered).toBeTruthy();
});
