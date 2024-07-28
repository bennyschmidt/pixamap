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

##### [Tile](https://github.com/bennyschmidt/v-staq/blob/main/src/components/Tile/index.js)

For tile maps (e.g. [`TileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileMap/index.js)).

##### [TileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileMap/index.js)

A multi-layered tile map.

##### [GraphicalTile](https://github.com/bennyschmidt/v-staq/blob/main/src/components/GraphicalTile/index.js)

For graphical tile maps (e.g. [`GraphicalTileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/GraphicalTileMap/index.js)).

##### [GraphicalTileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/GraphicalTileMap/index.js)

A multi-layered graphical tile map.

##### Tile3D

For 3D tile maps (e.g. `TileMap3D`).

##### TileMap3D

A multi-layered 3D tile map.

##### GraphicalTile3D

For graphical 3D tile maps (e.g. `GraphicalTileMap3D`).

##### GraphicalTileMap3D

A multi-layered graphical 3D tile map.

##### Token

For token maps (e.g. `TokenMap`).

##### TokenMap

A multi-layered token map.

##### Token3D

For 3D token maps (e.g. `TokenMap3D`).

##### TokenMap3D

A multi-layered 3D token map.

## Apps

##### [TileMapEditor](https://github.com/bennyschmidt/v-staq/blob/main/src/apps/TileMapEditor/index.js) (2D)

A visual editor with tile import and map export options.

##### BlockCraft (3D)

A visual editor with block import and map export options.

##### NoteBoard (2D)

A visual editor with note import and board export options.

##### Token2Vec (3D)

A visual editor with token import and embeddings export options.

## Export Formats

### External applications

##### Unity (.json)

n x n

##### Minecraft (.mca)

16 x 16 x 256

##### Fortran (.fvec)

n x n

### Raw data

##### Vector (.json)

n

##### Matrix (.json)

n x n

##### Tensor (.json)

n x n x n

##### Supertensor (.json)

n x n x n x n
