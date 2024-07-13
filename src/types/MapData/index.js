import Layer from '../Layer';

const TYPE_ERROR = 'TypeError: Invalid layer data.';

/**
 * MapData
 */

class MapData extends Array {
  constructor (layers) {
    if (!layers.every(layer => layer instanceof Layer)) {
      throw TYPE_ERROR;
    }

    super(...layers);
  }
}

export default MapData;
