export default () => `
<div id="pageContainer">
  <p class="homeButton">
    <a href="">QUIT?</a>
  </p>
  <div id="bullyBoard">
  <!-- 1st -->
    <div id="a4" class="outerSquares empty"></div>
    <div id="b4" class="outerSquares empty"></div>
    <div id="c4" class="outerSquares empty"></div>
    <div id="d4" class="outerSquares empty"></div>
  <!-- 2nd -->
    <div id="a3" class="outerSquares empty"></div>
    <div id="b3" class="innerSquares empty"></div>
    <div id="c3" class="innerSquares empty"></div>
    <div id="d3" class="outerSquares empty"></div>
<!-- 3rd -->
    <div id="a2" class="outerSquares empty"></div>
    <div id="b2" class="innerSquares empty"></div>
    <div id="c2" class="innerSquares empty"></div>
    <div id="d2" class="outerSquares empty"></div>
<!-- 4th -->
    <div id="a1" class="outerSquares empty"></div>
    <div id="b1" class="outerSquares empty"></div>
    <div id="c1" class="outerSquares empty"></div>
    <div id="d1" class="outerSquares empty"></div>
  </div>
<!-- Player Items -->
  <div id="playerContainer">
  <!-- Player Chips -->
    <div style="grid-row-start:1;display:flex"><h5>YOUR CHIPS:</h5></div>
    <div id="playerChips">
    </div>
  <!-- Player Hand -->
    <div style="grid-row-start:3;display:flex"><h5>YOUR HAND:</h5></div>
    <div id="playerHand">
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/2_Hearts.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/3_Hearts.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img  src="https://github.com/TNathanSampson/BullyGame/blob/master/images/4_Hearts.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/5_Hearts.png?raw=true">
      </div>
      <div class="handCard" draggable="true"><img src="https://github.com/TNathanSampson/BullyGame/blob/master/images/6_Hearts.png?raw=true">
      </div>
    </div>
    <div style="grid-row-start:5;display:flex"><h5>YOUR DECK:</h5></div>
    <div id="playerDeck">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true">
    </div>
    <div style="grid-row-start:7;display:flex"><h5>YOUR DISCARD PILE:</h5></div>
    <div id="playerDiscardPile">
    </div>
  </div>
<!-- Opponent Items -->
  <div id="opponentContainer">
  <!-- Opponent Chips -->
    <div id="enemyChips">
      <h6>OPPONENT CHIPS:</h6>
    </div>
<!-- Opponent Hand -->
    <div id="playerHand">
      <h6>OPPONENT HAND:</h6>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
      <div id=""></div>
    </div>
    <div id="opponentDeck">
      <h6>OPPONENT DECK:</h6>
    </div>
  </div>
</div>
`;
