const obj = [
  {
    value: {
      a: 0,
    },
    expected: true,
  },
  { value: {}, expected: true },
  { value: { a: [] }, expected: true },
  { value: { a: {} }, expected: true },
  { value: new Object(), expected: true },
  { value: 0, expected: false },
  { value: 3, expected: false },
  { value: -1, expected: false },
  { value: 1, expected: false },
  { value: false, expected: false },
  { value: true, expected: false },
  { value: null, expected: false },
  { value: undefined, expected: false },
  {
    value: () => {
      return "hi";
    },
    expected: false,
  },
  {
    value: () => {
      return { a: 1 };
    },
    expected: false,
  },
  {
    value: (x = 0, y = 0) => x + y,
    expected: false,
  },
  { value: [], expected: false },
  { value: [1, 2, 3], expected: false },
  { value: ["a", "b", "c"], expected: false },
  { value: [{}], expected: false },
  { value: [{ a: 1 }], expected: false },
  { value: Math, expected: false },
  { value: /.*/, expected: false },
  { value: new RegExp("."), expected: false },
  { value: new Number(3), expected: false },
  { value: new String("hi"), expected: false },
  { value: new Boolean(true), expected: false },
  { value: new Date(), expected: false },

  { value: Object, expected: false },
  { value: Object.prototype, expected: false },
  { value: Object.create(null), expected: false },
];

export { obj };
