/**
 * ImageTileMap
 *
 * A multi-layered image tile map.
 */

import TileMap from '../TileMap';

const TILE_NOT_FOUND_ERROR = 'Tile not found.';
const IMAGE_NOT_FOUND_ERROR = 'Image not found.';

class ImageTileMap extends TileMap {
  constructor ({
    layers = [],
    images = [],
    name = ''
  }) {
    super({ name, layers });

    this.images = images;
    this.tileAtXY = this.tileAtXY.bind(this);
  }

  tileImageAtXY (x, y, layer = 0) {
    const tileId = this.tileAtXY(x, y, layer);

    if (tileId === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    const image = this.images[tileId];

    if (!image) {
      throw IMAGE_NOT_FOUND_ERROR;
    }

    return image;
  }

  tileImageNearXY (x, y, layer = 0) {
    const tileId = this.tileNearXY(x, y, layer);

    if (tileId === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    const image = this.images[tileId];

    if (!image) {
      throw IMAGE_NOT_FOUND_ERROR;
    }

    return image;
  }
}

export default ImageTileMap;
