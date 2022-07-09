// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.
// The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).
// The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
  const total = (ax2 - ax1) * (ay2 - ay1) + (bx2 - bx1) * (by2 - by1);
  if (ax2 <= bx1 || ay1 >= by2 || ax1 >= bx2 || ay2 <= by1) {
    return totalArea;
  }
  let a = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  let b = Math.min(ay2, by2) - Math.max(ay1, by1);
  let duplication = a * b;
  return totalArea - duplication;
};
