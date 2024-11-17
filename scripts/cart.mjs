export function addToCart(jacket) {
  const cart = localStorage.getItem("cart");
  if (cart === null) {
    const newCart = [];
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    const newCart = JSON.parse(cart);
    newCart.push(jacket);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}

export function removeFromCart(jacketId) {
  const cart = localStorage.getItem("cart");
  if (cart !== null) {
    let newCart = JSON.parse(cart);
    newCart = newCart.filter(item => item.id !== jacketId);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }
}

export function getCartTotal() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (!cart) return 0;
  return cart.reduce((total, item) => total + item.price, 0); 
}

export function displayCart() {
  const cartContainer = document.querySelector("#cart-container");
  const cart = localStorage.getItem("cart");

  if (cart === null || JSON.parse(cart).length === 0) {
    cartContainer.innerHTML = "<p>Cart is empty</p>";
  }else {
    const newCart = JSON.parse(cart);
    cartContainer.innerHTML = "";

    newCart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <h2>${item.title}</h2>
        <p>Price: $${item.price}</p>
        <p>Size: ${item.sizes.join(", ")}</p>
        <img src="${item.image}" alt="${item.title}" />
      `;

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", () => {
        removeFromCart(item.id);
        displayCart();
      });

      cartItem.appendChild(removeButton);
      cartContainer.appendChild(cartItem);
    });

    const total = document.createElement("p");
    total.textContent = `Total: $${getCartTotal()}`;
    cartContainer.appendChild(total);
  }
}

export function saveCartTotalToLocalStorage() {
  const totalCost = getCartTotal(); 
  console.log("Saving total cost to localStorage:", totalCost); 
  localStorage.setItem("cartTotal", totalCost); 
}

document.addEventListener("DOMContentLoaded", () => {
  const payNowButton = document.querySelector(".back-button-container a");
  if (payNowButton) {
    payNowButton.addEventListener("click", (e) => {
      e.preventDefault(); 
      saveCartTotalToLocalStorage(); 
      setTimeout(() => {
        window.location.href = "/checkout/index.html"; 
      }, 100); 
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const payNowButton = document.querySelector(".back-button-container a");
  if (payNowButton) {
    payNowButton.addEventListener("click", saveCartTotalToLocalStorage);
  }
});