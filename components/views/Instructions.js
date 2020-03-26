export default () => `
<section id="instructions">
  <h2>How to play Bully!</h2>
  <img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/honors_spade-14.png?raw=true" alt="me">
  <h4>How the Game is played in it's current state:</h4>

<p>The game will consist of two players. Each player has a deck of 13 cards; all the cards of a particular suit of a standard playing card deck, 2 through Ace of Hearts (for example). Cards have number values, 2-10 being obvious, and face cards assigned values of Jack - 11, Queen - 12, King - 13, and Ace - 14. Before play begins each player will draw 5 cards from the deck to place in their "Hand." Players may only put cards into play from their Hand.</p>

<p>The game begins with the first player (or AI, who will always go first) choosing a card from their Hand and placing that card within the 4 inner squares of the Game Board. (The Game Board is a 4 x 4 grid of 16 total locations) The 1st player must choose a location in the inner 4 squares, and the second player must choose a location in the Outer Ring of squares. This rule only applies to the first move of the game, and does not come into play past that point. After playing a card from their Hand, players will draw one card from the deck to replace it in their Hand.</p>

<p>From the second round forward, Players may place a card adjacent to the edges of any of their cards currently on the board, but not diagonally. Cards may be placed on top of other cards in attempt reach a total of 15 points or greater, "Locking" that location. Those cards will then be flipped over, and the Player will gain a "Chip," placed on the Locked location. Cards must be played adjacent to your existing cards, they cannot be played on Locked locations. Cards can be played on adjacent "enemy" locations, see "Attacking Locations" for those rules.</p>

<p>Attacking locations: A player also has the option of "Attacking" any adjacent location occupied by the other player's cards, so long as the card being played is larger than the sum of the "enemy" cards in that location. A successful attack will remove the enemy player's card(s) from that location, sending them to that player's discard pile, and places your card in that spot instead. This action also gains the player a Chip, but does NOT Lock the location. Locations are not locked until a total of 15 points or more are played on that location (requiring a minimum of two cards played). If a location is successfully Counter Attacked the next round, for example, by the other player, the location goes back under their control, the original Player's cards and chip are Discarded and Removed, respectfully, and replaced on the board by the new player's card and newly earned Chip.</p>

Play will continue in this fashion until a player's deck is depleted. The player will continue to play cards from their hand, but will not replace them even if they have cards in their Discard Pile. When all cards from the player's hand have been played, the Discard Pile will be shuffled if necessary, and the player will draw a new Hand of up to 5 cards (if possible). The game will continue until both players have exhausted all cards, at which point the game is over. The player with the most total Chips on the board is the Winner.
</p>
<p id="homeButton">
  <a href="">"Home"</a>
</p>
</section>
`;
