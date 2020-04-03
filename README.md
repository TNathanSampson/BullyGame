Capstone Documentation:

Elevator Pitch:
Bully (working title) is meant to be a simple card game that pits one player vs another while they attempt to gain control of the most board locations and earn the most chips for the Win.

Content Outline:

In the BullyGame project I will create a functional game in which a user may play against an "AI" opponent, and possibly include an option for Player vs Player. The application will include a Home Page, a page with Instructions, a page where the user chooses the Suit of cards they wish to use in the game, and finally the Game Board itself, with all it's components and actions. From a production standpoint, the Game Board will require the overwhelming majority of the work.

Link to my Wireframe (created in Draw.io) stored on Google Drive:
https://drive.google.com/file/d/1nhHhNbrNbUINDJbT6T1A0T0vvpjDeezm/view?usp=sharing

Link to photos of Game Mock-up, stored on Google Drive:
https://drive.google.com/open?id=1MD9eI_DReiWNMj95sAs4HMIrKmibXnEC


How the Game is played (in it's current state):

The game will consist of two players. Each player has a deck of 13 cards; all the cards of a paricular suit of a standard playing card deck, 2 through Ace of Hearts (for example). Cards have number values, 2-10 being obvious, and face cards assigned values of Jack - 11, Queen - 12, King - 13, and Ace - 14. Before play begins each player will draw 5 cards from the deck to place in their "Hand." Players may only put cards into play from their Hand.

The game begins with the first player (or AI, who will always go first) choosing a card from their Hand and placing that card within the 4 inner squares of the Game Board. (The Game Board is a 4 x 4 grid of 16 total locations) The 1st player must choose a location in the inner 4 squares, and the second player must choose a location in the Outer Ring of squares. This rule only applies to the first move of the game, and does not come into play past that point. After playing a card from their Hand, players will draw one card from the deck to replace it in their Hand.

From the second round forward, Players may place a card adjacent to the edges of any of their cards currently on the board, but not diagonally. Cards may be placed on top of other cards in attempt reach a total of 15 points or greater, "Locking" that location. Those cards will then be flipped over, and the Player will gain a "Chip," placed on the Locked location. Cards must be played adjacent to your existing cards, they cannot be played on Locked locations. Cards can be played on adjacent "enemy" locations, see "Attacking Locations" for those rules.

Attacking locations: A player also has the option of "Attacking" any adjacent location occupied by the other player's cards, so long as the card being played is larger than the sum of the "enemy" cards in that location. A successful attack will remove the enemy player's card(s) from that location, sending them to that player's discard pile, and places your card in that spot instead. This action also gains the player a Chip, but does NOT Lock the location. Locations are not locked until a total of 15 points or more are played on that location (requiring a minimum of two cards played). If a location is successfully Counter Attacked the next round, for example, by the other player, the location goes back under their control, the original Player's cards and chip are Discarded and Removed, respectfully, and replaced on the board by the new player's card and newly earned Chip.

Play will continue in this fashion until a player's deck is depleted. The player will continue to play cards from their hand, but will not replace them even if they have cards in their Discard Pile. When all cards from the player's hand have been played, the Discard Pile will be shuffled if necessary, and the player will draw a new Hand of up to 5 cards (if possible). The game will continue until both players have exhausted all cards, at which point the game is over. The player with the most total Chips on the board is the Winner.


Future Iterations of the Game:

The work is never done. The Concept of this game came from a much larger original scope. I came up with the concept of a Cooperative Boardgame, 4 players vs "The Board" or vs "AI". That larger game is still very conceptual, but the underlying bones of the game are where this project came from. In the future, after completing this project, I would like to create more iterations of the game until finally realizing the full scale of my original idea. I envision a 4 player cooperative game that, from a Marketability standpoint, could be given many different "Skins"; such as Fantasy, Sci-Fi, or a "Recess" theme for a Kid-friendly version of the game, while still retaining the same basic play structure. The name "Bully", in fact, comes from the potential AI antagonist of the kid-friendly "Recess" version of the game I originally imagined. I've stuck with name Bully so far because I feel it is a short, easy to remember word, and it does exeplify some of the "attack and steal" aspects of the current gameplay.




