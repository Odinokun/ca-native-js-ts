import { sum } from './01-sum';

test('sun should be correct', () => {
  // data
  const a = 1;
  const b = 2;
  // action
  const result = sum(a, b);
  // expectation
  expect(result).toBe(3);
});
