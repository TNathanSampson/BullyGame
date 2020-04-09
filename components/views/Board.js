export default () => `
<div id="pageContainer">
  <p class="homeButton"><a href="">QUIT?</a></p>
  <p class="dealDeck">DEAL!</p>
  <p class="dealPlayerHand invisible">Deal Hand</p>
  <div id="bullyBoard">
  <!-- 1st -->
    <div id="a4" class="outerSquares dropSpace"></div>
    <div id="b4" class="outerSquares dropSpace"></div>
    <div id="c4" class="outerSquares dropSpace"></div>
    <div id="d4" class="outerSquares dropSpace"></div>
  <!-- 2nd -->
    <div id="a3" class="outerSquares dropSpace"></div>
    <div id="b3" class="innerSquares dropSpace"></div>
    <div id="c3" class="innerSquares dropSpace"></div>
    <div id="d3" class="outerSquares dropSpace"></div>
<!-- 3rd -->
    <div id="a2" class="outerSquares dropSpace"></div>
    <div id="b2" class="innerSquares dropSpace"></div>
    <div id="c2" class="innerSquares dropSpace"></div>
    <div id="d2" class="outerSquares dropSpace"></div>
<!-- 4th -->
    <div id="a1" class="outerSquares dropSpace"></div>
    <div id="b1" class="outerSquares dropSpace"></div>
    <div id="c1" class="outerSquares dropSpace"></div>
    <div id="d1" class="outerSquares dropSpace"></div>
  </div>
<!-- Player Items -->
  <div id="playerContainer">
  <!-- Player Chips -->
    <div style="grid-row-start:1;display:flex"><h5>YOUR CHIPS:</h5></div>
    <div id="playerChips"></div>
  <!-- Player Hand -->
    <div style="grid-row-start:3;display:flex"><h5>YOUR HAND:</h5></div>
    <div id="playerHand">
    </div>
    <div style="grid-row-start:5;display:flex"><h5>YOUR DECK:</h5></div>
    <div id="playerDeck">
    </div>
    <div style="grid-row-start:7;display:flex"><h5>YOUR DISCARD PILE:</h5></div>
    <div id="playerDiscardPile">
    </div>
  </div>
<!-- Opponent Items -->
  <div id="opponentContainer">
  <!-- Opponent Chips -->
    <div style="grid-row-start:1;display:flex"><h5>OPPONENT CHIPS:</h5></div>
    <div id="opponentChips"></div>
<!-- Opponent Hand -->
    <div style="grid-row-start:3;display:flex"><h5>OPPONENT HAND:</h5></div>
    <div id="opponentHand">
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/2_Spades.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/3_Spades.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img  src="https://github.com/TNathanSampson/BullyGame/blob/master/images/4_Spades.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/5_Spades.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/6_Spades.png?raw=true">
      </div>
    </div>
    <div style="grid-row-start:5;display:flex"><h5>OPPONENT DECK:</h5></div>
    <div id="opponentDeck">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
      <img class="cardOp" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/gray_back.png?raw=true">
    </div>
    <div style="grid-row-start:7;display:flex"><h5>OPPONENT DISCARD PILE:</h5></div>
    <div id="opponentDiscardPile"></div>
  </div>
</div>
`;
