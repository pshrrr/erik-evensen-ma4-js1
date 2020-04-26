const request = async () => {
  try {
    const response = await fetch("https://api.rawg.io/api/games");
    const games = await response.json();
    const gameResults = games.results;
    createGames(gameResults);
  } catch (error) {
    console.log(error);
  }
};
request();

function createGames(gameResults) {
  console.log(gameResults);
  const gameContainer = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < gameResults.length; i++) {
    html += `<div>
      <div class="game">
      <h2>${gameResults[i].name}</h2>
      <img src=${gameResults[i].background_image} alt=${gameResults[i].name} />
  </div>`;
  }
  gameContainer.innerHTML = html;
}
