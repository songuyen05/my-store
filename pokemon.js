const cards = [
  {
    name: "Charizard",
    image: "images/charizard.jpg",
    type: "EX / Fire",
    price: "$25.99",
    desc: "A powerful Fire-type Pokémon with blazing attacks.",
    category: "exmega",
    quantity: 3
  },
  {
    name: "Pikachu Full Art",
    image: "images/pikachu_fullart.jpg",
    type: "Full Art / Electric",
    price: "$15.00",
    desc: "Full Art Pikachu with stunning artwork and great condition.",
    category: "fullart",
    quantity: 0
  },
  {
    name: "Squirtle",
    image: "images/squirtle.jpg",
    type: "Water",
    price: "$5.00",
    desc: "A classic Water-type Pokémon card.",
    category: "normal",
    quantity: 1
  }
];

const cardList = document.getElementById("card-list");
const searchBar = document.getElementById("search-bar");
const modal = document.getElementById("card-modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");
const modalType = document.getElementById("modal-type");
const modalPrice = document.getElementById("modal-price");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close");

// Determine which page we're on
let category = "all";
if (window.location.pathname.includes("fullarts.html")) {
  category = "fullart";
} else if (window.location.pathname.includes("exmega.html")) {
  category = "exmega";
}

// Filter cards based on the page category
const filteredCards = category === "all"
  ? cards
  : cards.filter(card => card.category === category);

// 🛒 Load cart from localStorage or create new
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(card) {
  const existing = cart.find(item => item.name === card.name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...card, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${card.name} added to cart!`);
}

// Function to render cards dynamically
function renderCards(list) {
  cardList.innerHTML = "";
  
  list.forEach(card => {
    const div = document.createElement("div");
    div.classList.add("card-item");

    // Show SOLD OUT overlay if quantity is 0
    const soldOutHTML = card.quantity === 0
      ? `<div class="sold-out">SOLD OUT</div>`
      : "";

      // Insert quantity below the card name
    const quantityHTML = card.quantity > 0
      ? `<div class="quantity">Quantity: ${card.quantity}</div>`
      : "";

    div.innerHTML = `
      <div class="image-container">
        ${soldOutHTML}
        <img src="${card.image}" alt="">
      </div>
      <h3>${card.name}</h3>
      ${quantityHTML}
      <button class="view-btn">View</button>
      <button class="cart-btn" ${card.quantity === 0 ? "disabled" : ""}>Add to Cart</button>
    `;
    cardList.appendChild(div);

    // Add event listener for View button
    if (card.quantity > 0) {
      div.querySelector(".view-btn").addEventListener("click", () => {
        modalImg.src = card.image;
        modalName.textContent = card.name;
        modalType.textContent = `Type: ${card.type}`;
        modalPrice.textContent = `Price: ${card.price}`;
        modalDesc.textContent = card.desc;
        modal.style.display = "flex";
      });

      const cartBtn = div.querySelector(".cart-btn");
      cartBtn.addEventListener("click", () => addToCart(card));
    }
  });
}

// Initial render
renderCards(filteredCards);

// Search functionality
searchBar.addEventListener("input", e => {
  const term = e.target.value.toLowerCase();
  const filtered = filteredCards.filter(card =>
    card.name.toLowerCase().includes(term) ||
    card.type.toLowerCase().includes(term)
  );
  renderCards(filtered);
});

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
