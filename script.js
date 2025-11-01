const productList = document.getElementById("product-list");

const products = [
  {
    title: "Pokémon Cards",
    image: "images/PokemonCards.png",
    id: "pokemon-cards",
  },
  {
    title: "Full Arts",
    image: "images/FullArt.jpg",
    id: "full-arts",
  },
  {
    title: "EX / Mega",
    image: "images/EX-Mega.jpg",
    id: "ex-mega",
  },
];

// Create a card for each product
products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <button id="view-${product.id}">View All</button>
  `;

  productList.appendChild(card);
});

// Temporary placeholder for later
document.getElementById("view-pokemon-cards").addEventListener("click", () => {
  window.location.href = "pokemon.html";
});

document.getElementById("view-full-arts").addEventListener("click", () => {
  window.location.href = "fullarts.html";
});

document.getElementById("view-ex-mega").addEventListener("click", () => {
  window.location.href = "exmega.html";
});