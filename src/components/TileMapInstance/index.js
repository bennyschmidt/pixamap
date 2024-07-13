import MapInstance from '../MapInstance';

const TILE_NOT_FOUND_ERROR = 'Tile not found.';

/**
 * TileMapInstance
 */

class TileMapInstance extends MapInstance {
  constructor ({
    layers = [],
    tiles = [],
    name = ''
  }) {
    super(layers);

    this.tiles = tiles;
    this.tileAtXY = this.tileAtXY.bind(this);
  }

  tileAtXY (x, y, layer = 0) {
    const tileId = this.cellAtXY(x, y, layer);

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

export default TileMapInstance;
