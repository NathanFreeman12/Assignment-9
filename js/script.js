console.log("script loaded");

const button = document.querySelector("#fetch-gif-btn");
const gifContainer = document.querySelector("#gif-container");
const input = document.querySelector("#search-input");

const API_KEY = "on4N7HMMtESA2RtNoNnJlym3ofaXogou";

button.addEventListener("click", async () => {
  console.log("button clicked");

  gifContainer.innerHTML = "";

  const query = input.value.trim() || "cats";
  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=8`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    data.data.forEach((gif) => {
      gifContainer.innerHTML += `
        <img src="${gif.images.original.url}" width="200">
      `;
    });
  } catch (error) {
    console.log("ERROR:", error);
  }
});