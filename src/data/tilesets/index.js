/**
 * TileSet
 *
 * Utilities and default tile sets.
 */

import { GraphicalTile, Tile } from '../../components';

const TileSets = {
  default: [
    'transparent',
    'blue',
    'green',
    'brown',
    'grey',
    'beige',
    'red',
    'orange',
    'cyan',
    'white',
    'black'
  ],
  rpg: [
    {
      src: 'http://localhost:3000/tilesets/rpg/grass.png',
      size: 250
    },
    {
      src: 'http://localhost:3000/tilesets/rpg/water.png',
      size: 512
    }
  ],
  dungeon: [
    {
      src: 'http://localhost:3000/tilesets/dungeon/cave.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/cave-2.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/grate.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/street.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/street-2.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/wall-top-left.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/wall-top-right.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/wall-bottom-left.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/wall-bottom-right.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/stair-left.png',
      size: 32
    },
    {
      src: 'http://localhost:3000/tilesets/dungeon/stair-right.png',
      size: 32
    }
  ]
};

const createTileSet = async (tileSetName = 'default') => await (
  Promise.all(TileSets[tileSetName].map(async tile => (
    tileSetName === 'default'
      ? await new Tile({
        value: tile
      }).value
      : await new GraphicalTile({
        src: tile.src,
        size: tile.size
      }).value
  )))
);

export {
  createTileSet,
  TileSets,
  Tile,
  GraphicalTile
};
