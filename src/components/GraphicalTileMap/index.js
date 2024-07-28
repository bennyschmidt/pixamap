/**
 * GraphicalTileMap
 *
 * A multi-layered graphical tile map.
 */

import TileMap from '../TileMap';

const TILE_NOT_FOUND_ERROR = 'Tile not found.';

class GraphicalTileMap extends TileMap {
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

    const tile = this.tiles[tileId];

    if (!tile) {
      throw TILE_NOT_FOUND_ERROR;
    }

    return tile;
  }
}

export default GraphicalTileMap;
