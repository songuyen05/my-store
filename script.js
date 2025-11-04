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

const cards = [
  {
    name: "Charizard",
    image: "images/charizard.jpg",
    type: "EX / Fire",
    price: "$25.99",
    desc: "A powerful Fire-type Pokémon with blazing attacks.",
    category: "exmega"
  },
  {
    name: "Pikachu Full Art",
    image: "images/pikachu_fullart.jpg",
    type: "Full Art / Electric",
    price: "$15.00",
    desc: "Full Art Pikachu with stunning artwork and great condition.",
    category: "fullart"
  }
  {
    name: "Squirtle",
    image: "images/squirtle.jpg",
    type: "Water",
    price: "$5.00",
    desc: "A classic Water-type Pokémon card.",
    category: "normal"
  }
];

const cardList = document.getElementById("card-list");
const modal = document.getElementById("card-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalType = document.getElementById("modal-type");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

// Create cards dynamically
cards.forEach(card => {
  const div = document.createElement("div");
  div.classList.add("card-item");
  div.innerHTML = `
    <img src="${card.image}" alt="${card.name}">
    <h3>${card.name}</h3>
    <button class="view-btn">View</button>
  `;
  cardList.appendChild(div);

  // Add event listener for View button
  div.querySelector(".view-btn").addEventListener("click", () => {
    modalImg.src = card.image;
    modalName.textContent = card.name;
    modalType.textContent = `Type: ${card.type}`;
    modalPrice.textContent = `Price: ${card.price}`;
    modalDesc.textContent = card.desc;
    modal.style.display = "flex";
  });
});

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
