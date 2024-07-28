/**
 * ImageTileMap
 *
 * A multi-layered image tile map.
 */

import TileMap from '../TileMap';

const TILE_NOT_FOUND_ERROR = 'Tile not found.';
const TILE_IMAGE_NOT_FOUND_ERROR = 'Tile image not found.';

class ImageTileMap extends TileMap {
  constructor ({
    layers = [],
    tiles = [],
    name = ''
  }) {
    super({ name, layers });

    this.tiles = tiles;
    this.tileAtXY = this.tileAtXY.bind(this);
  }

  tileImageAtXY (x, y, layer = 0) {
    const tileId = this.tileAtXY(x, y, layer);

    if (tileId === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    const tileImage = this.tiles[tileId];

    if (!tileImage) {
      throw TILE_IMAGE_NOT_FOUND_ERROR;
    }

    return tileImage;
  }

  tileImageNearXY (x, y, layer = 0) {
    const tileId = this.tileNearXY(x, y, layer);

    if (tileId === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    const tileImage = this.tiles[tileId];

    if (!tileImage) {
      throw TILE_IMAGE_NOT_FOUND_ERROR;
    }

    return tileImage;
  }
}

export default ImageTileMap;
