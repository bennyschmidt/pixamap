const ImageTile = ({ src, size }) => new Promise((resolve, reject) => {
  const image = new Image();

  image.onload = () => resolve(image);
  image.onerror = reject;

  image.alt = 'tile';
  image.width = `${size}px`;
  image.height = `${size}px`;
  image.src = src;
});

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

    case 'picsum':
      return [
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 }),
        await ImageTile({ src: "https://picsum.photos/512", size: 512 })
      ];

    case 'rpg':
      return [
        await ImageTile({ src: "http://localhost:3000/tilesets/rpg/grass.png", size: 250 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/rpg/water.png", size: 512 })
      ];

    case 'dungeon':
      return [
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/cave.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/cave-2.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/grate.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/street.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/street-2.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/wall-top-left.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/wall-top-right.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/wall-bottom-left.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/wall-bottom-right.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/stair-left.png", size: 32 }),
        await ImageTile({ src: "http://localhost:3000/tilesets/dungeon/stair-right.png", size: 32 })
      ];
  }
};

export {
  createTileSet,
  DefaultTileSet,
  ImageTile
};
