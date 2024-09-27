export function splitIntoWords(sentence: string) {
  const wordsArray = sentence.toLowerCase().split(' ');

  // console.log(wordsArray);

  // return wordsArray
  //   .filter(w => w !== '-' && w !== '')
  //   .map(w => w.replace('!', '').replace(' ', '').replace('.', ''));
  return wordsArray
    .filter(w => w !== '-' && w !== '')
    .map(w => w.replace(/[! . ,]/g, ''));
}
