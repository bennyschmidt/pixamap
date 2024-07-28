/**
 * Tensor
 *
 * An array of matrices of the same size.
 */

import Matrix from '../Matrix';

class Tensor extends Array {
  constructor (matrixArray) {
    super(...matrixArray.map(matrix => new Matrix(matrix)));
  }
}

export default Tensor;
