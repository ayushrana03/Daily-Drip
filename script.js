let selectedSize = null;

// size select
document.querySelectorAll(".size-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedSize = btn.dataset.size;
  });
});

// add to cart
document.querySelector(".add-to-cart").addEventListener("click", () => {
  if (!selectedSize) {
    alert("Please select a size first!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: "Oversized T-Shirt",
    price: 999,
    size: selectedSize,
    qty: 1
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart ✔ Size: " + selectedSize);
});
