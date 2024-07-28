/**
 * Supertensor
 *
 * An array of tensors.
 */

import Tensor from '../Tensor';

class Supertensor extends Array {
  constructor (tensorArray) {
    super(...tensorArray.map(tensor => new Tensor(tensor)));
  }
}

export default Supertensor;
