const productList = document.getElementById("product-list");

const card = document.createElement("div");
card.classList.add("product-card");

card.innerHTML = `
  <img src="images/frontPage.png" alt="Pokémon Cards">
  <h3>Pokémon Cards</h3>
  <button id="view-all">View All</button>
`;

productList.appendChild(card);

// Temporary placeholder for later
document.getElementById("view-all").addEventListener("click", () => {
  alert("This will take you to the Pokémon Cards page soon!");
});
