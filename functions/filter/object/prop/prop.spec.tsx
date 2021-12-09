import { FilterObjectProp } from '.';

export { FilterObjectProp } from './prop';

it('should reduce the object with only selected keys', () => {
  const item = {
    A: { name: 'John' },
    B: { name: 'Jenny' },
    C: { name: 'Joan' },
    D: { name: 'Jordan' },
  };

  const keys = ['B', 'D'];

  const result = FilterObjectProp({ keys, item });
  const expectedResult = {
    B: { name: 'Jenny' },
    D: { name: 'Jordan' },
  };

  expect(result).toStrictEqual(expectedResult);
});
