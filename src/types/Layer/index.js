import Matrix from '../Matrix';

const TYPE_ERROR = 'TypeError: Invalid matrix vectors.';

/**
 * Layer
 */

class Layer extends Array {
  constructor (matrix) {
    if (!(matrix instanceof Matrix)) {
      throw TYPE_ERROR;
    }

    super(...matrix);
  }
}

export default Layer;
