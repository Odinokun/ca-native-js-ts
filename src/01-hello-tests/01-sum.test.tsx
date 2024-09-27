import { sum } from './01-sum';

// data
let a: number;
let b: number;

beforeEach(() => {
  a = 5;
  b = 2;
});

test('sun should be correct', () => {
  // action
  const result = sum(a, b);
  // expectation
  expect(result).toBe(7);
});
