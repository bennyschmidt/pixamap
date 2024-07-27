/**
 * Matrix
 *
 * An array of vectors.
 */

import Vector from '../Vector';

class Matrix extends Array {
  constructor (vectorArray) {
    super(...vectorArray.map(vector => new Vector(vector)));
  }
}

export default Matrix;
