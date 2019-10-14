const stringExample = "Hello, how are you? 2,ad,df.,.. I'm fine and you??"

const sanitizeString = _text => {
  if (typeof _text === 'string') return _text
    .replace(/['".,?\s]/g, '')
    .toLocaleLowerCase()
    .split('')
};

const getLettersAndQuantities = _sanitizedText => {
  if (!_sanitizedText) throw new Error('sanitized text param is undefined');
  return _sanitizedText.reduce((acc, val) => {
    if (val) acc[val] = acc[val] ? acc[val] + 1 : 1;
    return acc;
  }, {});
};

const orderLettersASC = _lettersAndQuantitiesArray => {
  if (!_lettersAndQuantitiesArray) throw new Error('letters and quantities  param is undefined');
  const letters = Object.keys(_lettersAndQuantitiesArray)
    .sort((a, b) => _lettersAndQuantitiesArray[a] - _lettersAndQuantitiesArray[b]);
  return letters;
}

const orderLettersDESC = _lOrderedByQuantitiesASC => {
  if (!_lOrderedByQuantitiesASC) throw new Error('letters and quantities param is undefined');
  return _lOrderedByQuantitiesASC.reverse();
}

const getTopThreeRepeatedLetters = _text => {
    if (!_text) throw new Error('text param is undefined');
    if (typeof _text !== 'string') throw new Error('text param should be a string');
    const sanitizedText = sanitizeString(_text);
    const lAndQuantities = getLettersAndQuantities(sanitizedText);
    console.log('QUANTITIES UNORDERED ', lAndQuantities);
    const lOrderedByQuantitiesASC = orderLettersASC(lAndQuantities)
    console.log('QUANTITIES ASC ', lOrderedByQuantitiesASC);
    const lOrderedByQuantitiesDESC = orderLettersDESC(lOrderedByQuantitiesASC);
    console.log('QUANTITIES DESC ', lOrderedByQuantitiesASC);
    return lOrderedByQuantitiesDESC.slice(0, 3);
};

console.log(getTopThreeRepeatedLetters(stringExample));