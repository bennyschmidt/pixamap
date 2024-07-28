/**
 * Matrix
 *
 * An array of vectors of the same length.
 */

import Vector from '../Vector';

class Matrix extends Array {
  constructor (vectorArray) {
    super(...vectorArray.map(vector => new Vector(vector)));
  }
}

export default Matrix;
