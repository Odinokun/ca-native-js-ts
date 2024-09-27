import { mult } from './01-mult';

test('multiply should be correct', () => {
  // data
  const a = 2;
  const b = 3;
  // action
  const result = mult(a, b);
  // expectation
  expect(result).toBe(6);
});
