import { TDObject } from '@hoomies/fuel.types.object';

export type TFilterObjectProp = {
  keys: Array<string>;
  item: TDObject;
};

export function FilterObjectProp({ keys, item }: TFilterObjectProp) {
  let result: TDObject = {};

  keys?.forEach((propName) => {
    if (item.hasOwnProperty(propName)) {
      result[propName] = item[propName];
    }
  });

  return result;
}
