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

/**
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {array} arr - The input array.
 * @return {array} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(arr) {
  return arr.map(
    (val) => `#${val.toString(16).padStart(6, '0').toUpperCase()}`
  );
}

/**
 * Returns the n largest values from the specified array
 *
 * @param {array} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {array} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(/* arr, n */) {
  throw new Error('Not implemented');
}

/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {array} arr1 - The first array.
 * @param {array} arr2 - The second array.
 * @return {array} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(/* arr1, arr2 */) {
  throw new Error('Not implemented');
}

/**
 * Finds the length of the longest increasing subsequence of a given array of integers.
 *
 * @param {array} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => 3
 */
function findLongestIncreasingSubsequence(/* nums */) {
  throw new Error('Not implemented');
}

/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {array} arr - The input array
 * @return {array}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {array} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements.
 * @return {array} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(/* arr, n */) {
  throw new Error('Not implemented');
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
function sortDigitNamesByNumericOrder(/* arr */) {
  throw new Error('Not implemented');
}

/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {array} arr - The input array.
 * @return {array} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(/* arr */) {
  throw new Error('Not implemented');
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
