import Matrix from '../Matrix';

/**
 * Tensor
 */

class Tensor extends Array {
  constructor (matrixArray) {
    super(...matrixArray.map(matrix => new Matrix(matrix)));
  }
}

export default Tensor;
