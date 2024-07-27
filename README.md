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

Tile references for graphical tile maps (e.g. TileImageMap).

##### [TileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileMap/index.js)

A tile map (matrix) of numeric tiles.

##### [TileImage](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileImage/index.js)

An image for graphical tile maps (e.g. TileImageMap).

##### [TileImageMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileImageMap/index.js)

A tile map (matrix) of image-based tiles.

## Apps

#### [Editor](https://github.com/bennyschmidt/v-staq/blob/main/src/apps/Editor/index.js)

A visual editor with tile import and map export options.
