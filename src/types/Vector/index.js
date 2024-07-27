/**
 * Vector
 *
 * An array of numbers with at least 2 elements.
 */

const MIN_LENGTH = 2;
const ELEMENT_TYPE = 'number';
const RANGE_ERROR = 'RangeError: Invalid vector length.';
const TYPE_ERROR = 'TypeError: Invalid vector element type.';

class Vector extends Array {
  constructor (vector) {
    if (!vector?.length) {
      throw RANGE_ERROR;
    }

    if (!vector.every(element => typeof(element) === ELEMENT_TYPE)) {
      throw TYPE_ERROR;
    }

    const length = (
      (vector.length === 1 && typeof(vector[0]) === ELEMENT_TYPE)
        ? vector[0]
        : vector.length
    );

    if (length < MIN_LENGTH) {
      throw RANGE_ERROR;
    }

    super(...vector);
  }
}

export default Vector;
