# v-staq

Vector states & queries.

## Library

Library exports of Types and Components to use in your project.

### Types

##### [Vector](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Vector/index.js)

An array of numbers with at least 2 elements.

##### [Matrix](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Matrix/index.js)

An array of vectors.

##### [Tensor](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Tensor/index.js)

An array of matrices.

##### [Supertensor](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Supertensor/index.js)

An array of tensors.

### Components

##### [AnimatedCanvas](https://github.com/bennyschmidt/v-staq/blob/main/src/components/AnimatedCanvas/index.js)

A `<canvas />` component that manages a render queue. Pass in an operations `queue` and `fps` to animate the canvas.

##### [TileSet](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileSet/index.js)

Tile references for graphical tile maps (e.g. [`GraphicalTileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/GraphicalTileMap/index.js)).

##### [TileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileMap/index.js)

A matrix of numeric tiles.

##### [TileGraphic](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileGraphic/index.js)

An image for graphical tile maps (e.g. [`GraphicalTileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/GraphicalTileMap/index.js)).

##### [GraphicalTileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/GraphicalTileMap/index.js)

A matrix of graphical tiles.

##### BlockMap

A matrix of numeric blocks.

##### BlockGraphic

A set of images for graphical block maps (e.g. `GraphicalBlockMap`).

##### GraphicalBlockMap

A matrix of graphical blocks.

## Apps

##### PixelEditor (2D)

A visual editor for drawing and painting with pixels.

##### [TileMapEditor](https://github.com/bennyschmidt/v-staq/blob/main/src/apps/TileMapEditor/index.js) (2D)

A visual editor with tile import and map export options.

##### BlockMapEditor (3D)

A visual editor with block import and map export options.

##### EmbeddingsEditor (3D)

A visual editor with vector import and embeddings export options.
