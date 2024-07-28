/**
 * TokenTile
 *
 * For token maps (e.g. TokenTileMap).
 */

class TokenTile {
  constructor ({ sequence, index }) {
    this.id = window.crypto.randomUUID();
    this.value = sequence[index];

    this.sequence = sequence.map((_, tokenIndex) => (
      new TokenTile({ sequence, index: tokenIndex }))
    );
  }

  partOfSpeech () {}
}

export default TokenTile;
