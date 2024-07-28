/**
 * Tile
 *
 * For tile maps (e.g. TileMap).
 */

class Tile {
  constructor ({ value }) {
    this.id = window.crypto.randomUUID();
    this.value = value;
  }
}

export default Tile;
