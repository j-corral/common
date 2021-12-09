import { TDObject } from './object';

it('TDObject should have correct type', () => {
  const Test: TDObject = {
    A: 'Hello',
    B: [1, 2, 3],
    C: function () {
      return true;
    },
    D: false,
  };

  expect(Test).toBeInstanceOf(Object);
});
