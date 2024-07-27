/**
 * Supertensor
 *
 * An array of tensors.
 */

import Tensor from '../Tensor';

const TYPE_ERROR = 'TypeError: Invalid tensor data.';

class Supertensor extends Array {
  constructor (tensorArray) {
    if (!tensorArray.every(tensor => tensor instanceof Tensor)) {
      throw TYPE_ERROR;
    }

    super(...tensorArray);
  }
}

export default Supertensor;
