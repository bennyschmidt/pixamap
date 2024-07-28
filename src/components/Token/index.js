/**
 * Token
 *
 * For token maps (e.g. TokenMap).
 */

class Token {
  constructor ({ sequence, index }) {
    this.id = window.crypto.randomUUID();
    this.value = sequence[index];

    this.sequence = sequence.map((_, tokenIndex) => (
      new Token({ sequence, index: tokenIndex }))
    );
  }

  partOfSpeech () {}
}

export default Token;
