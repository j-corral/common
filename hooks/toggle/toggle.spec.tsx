import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './toggle';

it('useToggle should invert value', () => {
  const { result } = renderHook(() => useToggle(false));
  expect(result.current.toggleValue).toBeFalsy();
  act(() => {
    result.current.toggler();
  });
  expect(result.current.toggleValue).toBeTruthy();
  act(() => {
    result.current.toggler();
  });
  expect(result.current.toggleValue).toBeFalsy();
});
