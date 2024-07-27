/**
 * TileImage
 *
 * An image for graphical tile maps (e.g. TileImageMap).
 */

const TileImage = ({ src, size }) => new Promise((resolve, reject) => {
  const image = new Image();

  image.onload = () => resolve(image);
  image.onerror = reject;

  image.alt = 'tile';
  image.width = `${size}px`;
  image.height = `${size}px`;
  image.src = src;
});

export default TileImage;
