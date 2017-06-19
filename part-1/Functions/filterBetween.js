/* Write a function filterBetween(array, min, max) that takes an array of
numbers, a min value, and a max value. It returns a new array containing only
the elements that are greater than or equal to min and less than or equal to max
*/

let filterBetween = function(array, min, max) {
  return array.slice(min - 1, max)
};