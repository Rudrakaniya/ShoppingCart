const cartItems = document.getElementById("cart-items");

let totalPrice = 0;
let itemOnePrice = cartItems.addEventListener("click", (e) => {
  console.log(e.target.id);
  // Item Zero
  if (e.target.id == "remove-item-btn-0") {
  }
  if (e.target.id == "like-item-btn-0") {
    let temp = document.getElementById("like-item-btn-0").src;
    if (temp === "http://127.0.0.1:5500/images/like.svg") {
      console.log("oll");
      document.getElementById("like-item-btn-0").src = "./images/like-red.svg";
    } else {
      console.log("boo" + temp);
      document.getElementById("like-item-btn-0").src = "./images/like.svg";
    }
  }
  if (e.target.id == "add-btn-0" || e.target.id == "add-btn-img-0") {
  }
  if (e.target.id == "sub-btn-0" || e.target.id == "sub-btn-img-0") {
  }

  // Item One
  if (e.target.id == "remove-item-btn-1") {
  }
  if (e.target.id == "like-item-btn-1") {
  }
  if (e.target.id == "add-btn-1" || e.target.id == "add-btn-img-1") {
  }
  if (e.target.id == "sub-btn-1" || e.target.id == "sub-btn-img-1") {
  }

  // Item Two
  if (e.target.id == "remove-item-btn-2") {
  }
  if (e.target.id == "like-item-btn-2") {
  }
  if (e.target.id == "add-btn-2" || e.target.id == "add-btn-img-2") {
  }
  if (e.target.id == "sub-btn-2" || e.target.id == "sub-btn-img-2") {
  }
});
