
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix) return [].concat(...matrix.map((el,i,arr) => (i % 2 !== 0) ? el.reverse() : el))
  return []
}
