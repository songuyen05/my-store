const productList = document.getElementById("product-list");

const products = [
  {
    title: "Pokémon Cards",
    image: "images/frontPage.png",
    id: "pokemon-cards",
  },
  {
    title: "Full Arts",
    image: "images/fullArts.png",
    id: "full-arts",
  },
  {
    title: "EX / Mega",
    image: "images/exMega.png",
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
    <button id="view-all">View All</button>
  `;

  productList.appendChild(card);
});

// Temporary placeholder for later
document.getElementById("view-all").addEventListener("click", () => {
  alert("This will take you to the Pokémon Cards page soon!");
});

document.getElementById("view-full-arts").addEventListener("click", () => {
  alert("This will take you to the Full Arts page soon!");
});

document.getElementById("view-ex-mega").addEventListener("click", () => {
  alert("This will take you to the EX/Mega page soon!");
});