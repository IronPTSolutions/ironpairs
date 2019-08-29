getRandomIndex = maxIndex => Math.floor(Math.random() * maxIndex);

const makeBasicPairs = students => {
  const remainingStudents = [...students];
  const pairs = [];

  let i = 0;
  while(remainingStudents.length > 1) {
    const newPair = [];

    new Array(2).fill().forEach(() => {
      const randomIndex = getRandomIndex(remainingStudents.length - 1);
      newPair.push(remainingStudents[randomIndex]);
      remainingStudents.splice(randomIndex, 1)
    })

    pairs.push(newPair);
    i++
  }

  if (remainingStudents.length > 0) {
    pairs[Math.floor(Math.random() * pairs.length)][2] = remainingStudents.pop();
  }

  return pairs;
}

const beautifyPairOrThreesome = pair => {
  return pair.reduce((acc, prev, index) => {
    if (index === 0) {
      return prev;
    }
    return `${acc}${index === pair.length - 1 ? ' y ' : ', '}${prev}`;
  }, '')
}

module.exports = students => makeBasicPairs(students).map(pair => beautifyPairOrThreesome(pair)).forEach(pair => console.log(pair))