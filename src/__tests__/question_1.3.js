const findOddAmount = (numbers) => {
  const array = numbers.reduce((prev, curr) => {
    const copyPrev = Object.assign({}, prev);
    copyPrev[curr] = (1 + copyPrev[curr] || 1);
    return copyPrev;
  }, {});
  const odd = Object.keys(array).find(item => array[item] % 2 !== 0);

  return (parseInt(odd, 10) || 0);
};

describe('findOddAmount()', () => {
  it('should return the number which occurs with an odd frequency', () => {
    expect(findOddAmount([1, 2, 2, 3, 3])).toEqual(1);
    expect(findOddAmount([8, 8, 7, 7, 7])).toEqual(7);
    expect(findOddAmount([10, 3, 3, 10, 6, 10, 6, 1, 1])).toEqual(10);
  });
});
