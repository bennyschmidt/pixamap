/**
 * MapInstance
 */

import {
  Matrix,
  Layer,
  MapData
} from '../../types';

const CELL_NOT_FOUND_ERROR = 'Cell not found.';

class MapInstance {
  constructor (data, name) {
    if (data instanceof MapData) {
      this.layers = data;
    } else {
      this.fromLayers(data);
    }

    this.id = crypto.randomUUID();
    this.createdAt = new Date().toISOString();
    this.updatedAt = null;
    this.cellAtXY = this.cellAtXY.bind(this);

    return this;
  }

  fromLayers (layers) {
    this.layers = layers.map(layer => (
      new Layer(
        new Matrix(layer)
      )
    ));

    return this;
  }

  cellAtXY (x, y, layer = 0) {
    const value = this.layers[layer][y][x];

    if (value === undefined) {
      throw CELL_NOT_FOUND_ERROR;
    }

    return value;
  }
}

export default MapInstance;
