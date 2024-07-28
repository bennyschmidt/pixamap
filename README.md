# v-staq

Vector states & queries.

## Library

Library exports of Types and Components to use in your project.

### Types

##### [Vector](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Vector/index.js)

An array of numbers with at least 2 elements.

##### [Matrix](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Matrix/index.js)

An array of vectors of the same length.

##### [Tensor](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Tensor/index.js)

An array of matrices of the same size.

##### [Supertensor](https://github.com/bennyschmidt/v-staq/blob/main/src/types/Supertensor/index.js)

An array of tensors of the same size.

### Components

##### [Tile](https://github.com/bennyschmidt/v-staq/blob/main/src/components/Tile/index.js)

For tile maps (e.g. [`TileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileMap/index.js)).

##### [TileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TileMap/index.js)

A multi-layered tile map.

##### [ImageTile](https://github.com/bennyschmidt/v-staq/blob/main/src/components/ImageTile/index.js)

For image tile maps (e.g. [`ImageTileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/ImageTileMap/index.js)).

##### [ImageTileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/ImageTileMap/index.js)

A multi-layered image tile map.

##### Tile3D

For 3D tile maps (e.g. `TileMap3D`).

##### TileMap3D

A multi-layered 3D tile map.

##### ImageTile3D

For image 3D tile maps (e.g. `ImageTileMap3D`).

##### ImageTileMap3D

A multi-layered image 3D tile map.

##### [TokenTile](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TokenTile/index.js)

For token maps (e.g. [`TokenTileMap`](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TokenTileMap/index.js)).

##### [TokenTileMap](https://github.com/bennyschmidt/v-staq/blob/main/src/components/TokenTileMap/index.js)

A multi-layered token map.

##### TokenTile3D

For 3D token maps (e.g. `TokenTileMap3D`).

##### TokenTileMap3D

A multi-layered 3D token map.

## Apps

##### [MapEditor](https://github.com/bennyschmidt/v-staq/blob/main/src/apps/MapEditor/index.js) (2D)

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

##### Flat Vector (.fvecs)

n
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
