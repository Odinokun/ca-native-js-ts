import { splitIntoWords } from './01-sentence';

test('splitting should be correct', () => {
  // data
  const sentence1 = 'Hello my friend!';
  const sentence2 = 'JS - the      best programming language.';

  // action
  const result1 = splitIntoWords(sentence1);
  const result2 = splitIntoWords(sentence2);

  // expectation
  expect(result1.length).toBe(3);
  expect(result1[0]).toBe('hello');
  expect(result1[1]).toBe('my');
  expect(result1[2]).toBe('friend');
  expect(result1).toEqual(['hello', 'my', 'friend']);

  expect(result2.length).toBe(5);
  expect(result2[0]).toBe('js');
  expect(result2[1]).toBe('the');
  expect(result2[2]).toBe('best');
  expect(result2[3]).toBe('programming');
  expect(result2[4]).toBe('language');
});
