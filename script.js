const products = [
  { name: "T-shirt", price: 20, image: "https://via.placeholder.com/250" },
  { name: "Hat", price: 15, image: "https://via.placeholder.com/250" },
  { name: "Sneakers", price: 50, image: "https://via.placeholder.com/250" },
  { name: "Backpack", price: 35, image: "https://via.placeholder.com/250" },
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button>Add to Cart</button>
  `;

  productList.appendChild(card);
});
