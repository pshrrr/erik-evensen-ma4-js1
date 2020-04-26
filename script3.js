fetch("https://api.rawg.io/api/games/4200")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    createGameDetails(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
function createGameDetails(data) {
  const heading = document.querySelector("h1");
  heading.innerHTML = data.name;
  const description = document.querySelector(".description");
  description.innerHTML = data.description;
  const image = document.querySelector(".image");
  image.style.backgroundImage = `url(${data.background_image})`;
}
