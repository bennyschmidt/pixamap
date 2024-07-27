/**
 * TileSet
 *
 * Tile references for graphical tile maps (e.g. GraphicalTileMap).
 */

import { TileGraphic } from '..';

const DefaultTileSet = [
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
];

const createTileSet = async tileSetName => {
  switch (tileSetName) {
    case 'default':
      return DefaultTileSet;

    case 'rpg':
      return [
        await TileGraphic({ src: "http://localhost:3000/tilesets/rpg/grass.png", size: 250 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/rpg/water.png", size: 512 })
      ];

    case 'dungeon':
      return [
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/cave.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/cave-2.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/grate.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/street.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/street-2.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/wall-top-left.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/wall-top-right.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/wall-bottom-left.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/wall-bottom-right.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/stair-left.png", size: 32 }),
        await TileGraphic({ src: "http://localhost:3000/tilesets/dungeon/stair-right.png", size: 32 })
      ];
  }
};

export {
  createTileSet,
  DefaultTileSet,
  TileGraphic
};
