import Vector from '../Vector';

/**
 * Matrix
 */

class Matrix extends Array {
  constructor (vectorArray) {
    super(...vectorArray.map(vector => new Vector(vector)));
  }
}

export default Matrix;
