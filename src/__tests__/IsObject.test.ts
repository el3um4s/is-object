import isObject from "../index";

import { obj } from "./_Objects.data";

test.each(obj)(`$# : $value --> $expected`, ({ value, expected }) => {
  // const { value, expected } = { ...data };
  const result = isObject(value);
  expect(result).toEqual(expected);
});
