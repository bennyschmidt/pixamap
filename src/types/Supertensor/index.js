/**
 * Supertensor
 *
 * An array of tensors of the same size.
 */

import Tensor from '../Tensor';

class Supertensor extends Array {
  constructor (tensorArray) {
    super(...tensorArray.map(tensor => new Tensor(tensor)));
  }
}

export default Supertensor;
