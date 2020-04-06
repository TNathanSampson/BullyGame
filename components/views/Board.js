export default () => `
<div id="pageContainer">
  <p class="homeButton">
    <a href="">QUIT?</a>
  </p>
  <div id="bullyBoard">
  <!-- 1st -->
    <div id="a4" class="outerSquares"></div>
    <div id="b4" class="outerSquares">
      <img class ="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/2_Spades.png?raw=true">
      <img class ="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/3_Spades.png?raw=true">
      <img class ="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/4_Spades.png?raw=true">
      <img class ="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/5_Spades.png?raw=true">
    </div>
    <div id="c4" class="outerSquares"></div>
    <div id="d4" class="outerSquares"></div>
  <!-- 2nd -->
    <div id="a3" class="outerSquares"></div>
    <div id="b3" class="innerSquares"></div>
    <div id="c3" class="innerSquares"></div>
    <div id="d3" class="outerSquares"></div>
<!-- 3rd -->
    <div id="a2" class="outerSquares"></div>
    <div id="b2" class="innerSquares"></div>
    <div id="c2" class="innerSquares"></div>
    <div id="d2" class="outerSquares"></div>
<!-- 4th -->
    <div id="a1" class="outerSquares"></div>
    <div id="b1" class="outerSquares"></div>
    <div id="c1" class="outerSquares"></div>
    <div id="d1" class="outerSquares"></div>
  </div>
<!-- Player Items -->
  <div id="playerContainer">
  <!-- Player Chips -->
    <div id="playerChips">
      <h5>YOUR CHIPS:</h5>
    </div>
  <!-- Player Hand -->
    <div id="playerHand">
      <h5>YOUR HAND:</h5>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/2_Hearts.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/3_Hearts.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/4_Hearts.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/5_Hearts.png?raw=true">
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/6_Hearts.png?raw=true">
    </div>
    <div id="playerDeck">
      <h5>YOUR DECK:</h5>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
      <img class="card" src="https://github.com/TNathanSampson/BullyGame/blob/master/images/red_back.png?raw=true"></<img>
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
