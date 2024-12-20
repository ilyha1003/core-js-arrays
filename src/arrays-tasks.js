function getIntervalArray(start, end) {
  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
}

function sumArrays(arr1, arr2) {
  return arr1.length > arr2.length
    ? arr1.map((el, index) => el + (arr2[index] || 0))
    : arr2.map((el, index) => el + (arr1[index] || 0));
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((el) => el === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter((el) => Boolean(el) === true);
}

function getStringsLength(arr) {
  return arr.map((el) => el.length);
}

function getAverage(arr) {
  return arr.length > 0
    ? parseFloat((arr.reduce((a, b) => a + b) / arr.length).toFixed(2))
    : 0;
}

function isSameLength(arr) {
  return arr.every((el) => el.length === arr[0].length);
}

function isValueEqualsIndex(arr) {
  return arr.some((el, index) => el === index);
}

function insertItem(arr, item, index) {
  return arr.splice(index, 0, item);
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  return n === 0 ? [] : arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return Array.from(new Set(arr));
}

/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {array} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
  return n === 1
    ? Array(size).fill(0)
    : Array(size)
        .fill(0)
        .map(() => createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.flat(Infinity);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce((acc, curr) => acc + curr[0] - curr[1], 0);
}

function createChunks(arr, chunkSize) {
  return Array(Math.ceil(arr.length / chunkSize))
    .fill(null)
    .map(() => arr.splice(0, chunkSize));
}

function generateOdds(len) {
  return Array(len)
    .fill(1)
    .map((el, index) => el + index * 2);
}

function getElementByIndices(arr, indices) {
  return indices.reduce((res, index) => res[index], arr);
}

function getFalsyValuesCount(arr) {
  return arr.filter((el) => !el).length;
}

function getIdentityMatrix(n) {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (__, j) => (i === j ? 1 : 0))
  );
}

function getIndicesOfOddNumbers(numbers) {
  return numbers
    .filter((val) => val % 2 !== 0)
    .map((val) => numbers.indexOf(val));
}

function getHexRGBValues(arr) {
  return arr.map(
    (val) => `#${val.toString(16).padStart(6, '0').toUpperCase()}`
  );
}

function getMaxItems(arr, n) {
  return arr
    .sort((a, b) => a - b)
    .reverse()
    .slice(0, n);
}

function findCommonElements(arr1, arr2) {
  return arr1.filter((el) => arr2.includes(el));
}

function findLongestIncreasingSubsequence(nums) {
  let count = 1;
  return nums.reduce((acc, el, index) => {
    if (index > 0 && el > nums[index - 1]) count += 1;
    else count = 1;
    return Math.max(acc, count);
  }, 1);
}

function propagateItemsByPositionIndex(arr) {
  return arr.flatMap((el, index) => new Array(index + 1).fill(el));
}

function shiftArray(arr, n) {
  return [...arr.slice(-n), ...arr.slice(0, -n)];
}

/**
 * Sorts digit names.
 *
 * @param {array} arr - The input array.
 * @return {array} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
  const digitObject = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return arr.sort((a, b) => digitObject[a] - digitObject[b]);
}

function swapHeadAndTail(arr) {
  const midPoint = Math.floor(arr.length / 2);
  const head = arr.splice(0, midPoint);
  const tail = arr.splice(-midPoint);

  return [...tail, ...arr, ...head];
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
