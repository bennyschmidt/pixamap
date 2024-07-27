/**
 * Editor
 *
 * A visual editor with tile import and map
 * export options.
 */

import { useEffect, useState } from 'react';

import {
  AnimatedCanvas,
  TileImageMap
} from '../../components';

import {
  createTileSet,
  DefaultTileSet
} from '../../components/TileSet';

import DefaultMap from '../../data/default';

import './styles.css';

const CANVAS_SIZE = 3200;
const NUM_TILES = 100;
const MAX_ZOOM = 5;

const MINIMAP_CANVAS_SIZE = 320;
const MINIMAP_TILE_SIZE = MINIMAP_CANVAS_SIZE / 10;

const PALETTE = {
  default: '(default)',
  rpg: 'RPG',
  dungeon: 'Dungeon'
};

const TileMapEditor = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [numTiles, setNumTiles] = useState(NUM_TILES);
  const [canvasSize, setCanvasSize] = useState(CANVAS_SIZE * zoomLevel);
  const [tileSize, setTileSize] = useState(CANVAS_SIZE / (NUM_TILES / zoomLevel));
  const [tileSet, setTileSet] = useState(DefaultTileSet);
  const [tileMap, setTileMap] = useState();
  const [tileQueue, setTileQueue] = useState([]);
  const [paletteQueue, setPaletteQueue] = useState([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [palette, setPalette] = useState('dungeon');
  const [layer, setLayer] = useState(0);
  const [mapName, setMapName] = useState('Untitled');

  const [layers, setLayers] = useState([
    DefaultMap
  ]);

  // Load

  useEffect(() => {
    const onMouseMove = ({ clientX, clientY }) => {
      setMouseX(window.scrollX + +clientX);
      setMouseY(window.scrollY + +clientY);
    };

    const onScroll = ({ clientX, clientY }) => {
      setMouseX(window.scrollX + +clientX);
      setMouseY(window.scrollY + +clientY);
    };

    document.body.onmousemove = onMouseMove;
    document.body.onscroll = onScroll;

    onChangePalette({ target: { value: palette }});

    return () => {
      document.body.onmousemove = null;
      document.body.onscroll = null;
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Zoom

  useEffect(() => {
    // Resize canvas on zoom

    const updatedCanvasSize = CANVAS_SIZE * zoomLevel;

    setCanvasSize(updatedCanvasSize);
    setTileSize(updatedCanvasSize / numTiles);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoomLevel]);

  // Tiles

  useEffect(() => {
    if (!tileMap) return;

    // Clear canvas

    const queue = [{
      clearRect: [0, 0, canvasSize, canvasSize]
    }];

    // Render tiles

    tileMap.layers[layer].forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        const tileImage = tileSet[tile];
        const isImage = tileImage instanceof HTMLImageElement;
        const drawFn = isImage ? 'drawImage' : 'fillRect';

        // Define tile

        const tileProps = {
          fillStyle: tileImage,
          [drawFn]: (isImage ? [tileImage] : []).concat([
            colIndex * tileSize,
            rowIndex * tileSize,
            tileSize,
            tileSize
          ]),
        };

        // Define tile mouse cursor

        const cursorProps = {
          strokeStyle: 'gold',
          strokeRect: [
            Math.round((mouseX - (tileSize / 2)) / tileSize) * tileSize,
            Math.round((mouseY - (tileSize / 2)) / tileSize) * tileSize,
            tileSize,
            tileSize
          ]
        };

        // Schedule renders

        queue.push(
          tileProps,
          cursorProps
        );
      });
    });

    setTileQueue(queue);
  }, [
    tileMap,
    tileSet,
    layer,
    mouseX,
    mouseY,
    canvasSize,
    tileSize
  ]);

  const onChangePalette = async ({ target: { value }}) => {
    setPalette(value);

    const loadedTileSet = await createTileSet(value);

    setTileSet(loadedTileSet);

    const updatedTileMap = new TileImageMap({
      layers,
      tiles: loadedTileSet
    });

    setTileMap(updatedTileMap);

    if (!updatedTileMap?.tiles) return;

    const paletteMap = [];
    const paletteTiles = [...updatedTileMap.tiles];

    // Clear canvas

    const queue = [{
      clearRect: [0, 0, canvasSize, canvasSize]
    }];

    // Create minimap (palette)

    for (let i = 0; i < 10; i++) {
      paletteMap[i] = paletteTiles.splice(0, 10);
    }

    paletteMap.forEach((row, rowIndex) => {
      row.forEach((tile, colIndex) => {
        const isImage = tile instanceof HTMLImageElement;
        const drawFn = isImage ? 'drawImage' : 'fillRect';

        // Define tile

        const tileProps = {
          fillStyle: tile,
          [drawFn]: (isImage ? [tile] : []).concat([
            colIndex * MINIMAP_TILE_SIZE,
            rowIndex * MINIMAP_TILE_SIZE,
            MINIMAP_TILE_SIZE,
            MINIMAP_TILE_SIZE
          ]),
        };

        // Define tile mouse cursor

        const cursorProps = {
          strokeStyle: 'white',
          strokeRect: [
            // if currentTile
            // colIndex * tileSize,
            // rowIndex * tileSize,
            0,
            0,
            tileSize,
            tileSize
          ]
        };

        queue.push(
          tileProps,
          cursorProps
        );

        // if (isMouseOver) {
        //   // Define tile mouse cursor

        //   const cursorProps = {
        //     strokeStyle: 'gold',
        //     strokeRect: [
        //       Math.round((mouseX - (tileSize / 2)) / tileSize) * tileSize,
        //       Math.round((mouseY - (tileSize / 2)) / tileSize) * tileSize,
        //       tileSize,
        //       tileSize
        //     ]
        //   };

        //   queue.push(cursorProps);
        // }
      });
    });

    setPaletteQueue(queue);
  };

  const onChangeLayer = index => () => (
    setLayer(index)
  );

  const onChangeZoomLevel = delta => () => setZoomLevel(
    parseFloat(
      Math.min(
        MAX_ZOOM,
        Math.max(
          .1,
          zoomLevel + delta
        )
      ).toFixed(1)
    )
  );

  const onChangeNumTiles = ({ target: { value }}) => {
    setNumTiles(value);
    setTileSize(canvasSize / numTiles);
  };

  const onChangeMapName = ({ target: { value }}) => (
    setMapName(value)
  );

  const onCreateLayer = matrix => setLayers([
    ...layers,

    matrix
  ]);

  return (
    <div className="TileMapEditor">
      <aside className="sidebar">
        <section className="sidebar-section">
          <>
            <label htmlFor="mapName">
              Name
            </label>
            <div className="row">
              <input
                name="mapName"
                id="mapName"
                value={mapName}
                onChange={onChangeMapName}
              />
            </div>
          </>
          <>
            <label htmlFor="zoom">
              Map
            </label>
            <div className="row">
              <div className="control">
                <input
                  name="numTilesX"
                  id="numTilesX"
                  value={numTiles}
                  onChange={onChangeNumTiles}
                  disabled
                />
                <label htmlFor="numTilesX">
                  ✕
                </label>
                <input
                  name="numTilesY"
                  id="numTilesY"
                  value={numTiles}
                  onChange={onChangeNumTiles}
                  disabled
                />
                <label>
                  tiles
                </label>
              </div>
              <div
                className="control"
                name="zoom"
                id="zoom"
              >
                <button onClick={onChangeZoomLevel(zoomLevel > 1 ? -1 : -.1)}>
                  -
                </button>
                <div>{zoomLevel}</div>
                <button onClick={onChangeZoomLevel(zoomLevel >= 1 ? 1 : .1)}>
                  +
                </button>
              </div>
            </div>
          </>
          <>
            <label htmlFor="palette">
              Palette
            </label>
            <div className="select">
              <select
                name="palette"
                id="palette"
                onChange={onChangePalette}
                value={palette}
              >
                {Object.keys(PALETTE).map(paletteName => (
                  <option
                    key={paletteName}
                    value={paletteName}
                  >
                    {PALETTE[paletteName]}
                  </option>
                ))}
              </select>
            </div>
            <AnimatedCanvas
              width={MINIMAP_CANVAS_SIZE}
              height={MINIMAP_CANVAS_SIZE}
              queue={paletteQueue}
              setTileQueue={setPaletteQueue}
            />
          </>
        </section>
        <section className="sidebar-section">
          <label htmlFor="layers">
            Layers
          </label>
          <ul
            name="layers"
            id="layers"
          >
            {layers.map((_, index) => (
              <li key={index} onClick={onChangeLayer(index)}>
                Layer {index}
              </li>
            ))}
          </ul>
          <button onClick={onCreateLayer} disabled>
            Add Layer
          </button>
        </section>
      </aside>
      <AnimatedCanvas
        width={canvasSize}
        height={canvasSize}
        queue={tileQueue}
        setTileQueue={setTileQueue}
      />
    </div>
  );
};

export default TileMapEditor;
