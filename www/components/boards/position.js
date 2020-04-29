/**
 * Cell width proportion
 * Cell is represented by an hexagon who is not totally square. Approximatively, width is 0.89 unit of height.
 */
const cellWidthProportion = 0.9;

/**
 * Cell height three quarter
 * Each cell is entangled in the two cell above. To represent this entanglement, we need to manage with the "three quarter" height.
 */
const cellRowOffset = 1;

/**
 * To draw the complete board, we need to calculate his width/height ratio.
 * This ratio permits to keep the same proportion for each size of grid.
 *
 * @param {int} size
 */
export const getBoardRatio = (size) => {
  const height = 1 + (size - 1) * cellRowOffset;

  const width =
    size * cellWidthProportion +
    (size * cellWidthProportion - cellWidthProportion) / 2;

  return height / width;
};

/**
 * This function determines the width of the cell based on the total number of cells in the grid.
 *
 * @param {int} length
 */
export const getCellWidth = (length) => {
  return 100 / (length + (length - 1) / 2);
};

/**
 * This function determines the length of the cell based on the total number of cells in the grid.
 *
 * @param {int} length
 */
export const getCellHeight = (length) => {
  return 100 / (1 + (length - 1) * cellRowOffset);
};

/**
 * This function calculates the top offset of the cell based on his row index and the height of the cell.
 *
 * @param {integer} rowIndex
 * @param {integer} cellHeight
 */
export const calculateTopPosition = (rowIndex, cellHeight) => {
  return rowIndex * cellHeight * cellRowOffset;
};

/**
 * This function calculates the left offset of the cell based on the column, row index and the width of the cell.
 *
 * @param {integer} columnIndex
 * @param {integer} rowIndex
 * @param {integer} cellWidth
 */
export const calculateLeftPosition = (rowIndex, columnIndex, cellWidth) => {
  const lineOffset = (rowIndex * cellWidth) / 2;

  return lineOffset + cellWidth * columnIndex;
};
