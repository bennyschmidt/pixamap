/**
 * ImageTile
 *
 * For image tile maps (e.g. ImageTileMap).
 */

import { Tile } from '..';

class ImageTile extends Tile {
  constructor ({ src, size }) {
    super({ value: src });

    this.size = size;

    this.domProps = {
      id: `tile-${this.id}`,
      width: `${size}px`,
      height: `${size}px`
    };

    this.value = new Promise((resolve, reject) => {
      const image = new Image();

      image.onload = () => resolve(image);
      image.onerror = reject;

      image.alt = this.domProps.id;
      image.width = `${size}px`;
      image.height = `${size}px`;
      image.src = src;

      image.setAttribute('class', 'tile-image');
      image.setAttribute('id', `tile-image-${this.id}`);

      this.domProps.src = src;
    });
  }
}

export default ImageTile;
