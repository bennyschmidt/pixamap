/**
 * TokenTileMap
 *
 * A multi-layered image tile map.
 */

import TileMap from '../TileMap';

const TILE_NOT_FOUND_ERROR = 'Tile not found.';
const TOKEN_NOT_FOUND_ERROR = 'Token tile not found.';

class TokenTileMap extends TileMap {
  constructor ({
    layers = [],
    tokens = [],
    name = ''
  }) {
    super({ name, layers });

    this.tokens = tokens;
    this.tileAtXY = this.tileAtXY.bind(this);
  }

  tokenAtXY (x, y, layer = 0) {
    const tileId = this.tileAtXY(x, y, layer);

    if (tileId === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    const tile = this.tokens[tileId];

    if (!tile) {
      throw TILE_NOT_FOUND_ERROR;
    }

    return tile;
  }

  tokenNearXY (x, y, layer = 0) {
    const tileId = this.tileNearXY(x, y, layer);

    if (tileId === undefined) {
      throw TILE_NOT_FOUND_ERROR;
    }

    const token = this.tokens[tileId];

    if (!token) {
      throw TOKEN_NOT_FOUND_ERROR;
    }

    return token;
  }
}

export default TokenTileMap;
