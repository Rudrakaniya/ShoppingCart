const cartItems = document.getElementById("cart-items");

const itemCount0 = document.getElementById("item-count-0");
const itemPrice0 = document.getElementById("item-price-0");

const itemCount1 = document.getElementById("item-count-1");
const itemPrice1 = document.getElementById("item-price-1");

const itemCount2 = document.getElementById("item-count-2");
const itemPrice2 = document.getElementById("item-price-2");

const totalPrice = document.getElementById("total-price");

let userData = {};

(function syncDataFromLocalStorrage() {
  let tempData = localStorage.getItem("userData");
  if (tempData == null) {
    userData = {
      0: {
        itemPrice: 469,
        itemCount: 1,
      },
      1: {
        itemPrice: 289,
        itemCount: 1,
      },
      2: {
        itemPrice: 199,
        itemCount: 1,
      },
    };
  } else {
    userData = JSON.parse(tempData);
  }
})();

function updateUserDataWithLocalStorage(tempData) {
  localStorage.setItem("userData", JSON.stringify(tempData));
}

function makeUI() {
  for (let [key, value] of Object.entries(userData)) {
    let tempPrice = +value.itemCount * +value.itemPrice;
    document.getElementById(`item-count-${key}`).innerText = value.itemCount;
    document.getElementById(`item-price-${key}`).innerText = "$" + tempPrice;
  }
}
makeUI();

function updateTotal() {
  let tempTotal = 0;
  for (let [key, value] of Object.entries(userData)) {
    tempTotal += +value.itemPrice * +value.itemCount;
  }
  totalPrice.innerText = "$" + tempTotal;
}
updateTotal();

function addItemClicked(currIndex, currCount, currPrice) {
  currIndex = currIndex[currIndex.length - 1];
  let updatedCount = +currCount.innerText + 1;

  let tempPrice = currPrice.innerText.slice(1, currPrice.length);
  console.log("tempPrice  =  " + tempPrice);
  let updatedPrice = +tempPrice + userData[currIndex].itemPrice;
  console.log(updatedPrice);

  document.getElementById(`item-count-${currIndex}`).innerText = updatedCount;
  document.getElementById(`item-price-${currIndex}`).innerText =
    "$" + updatedPrice;

  userData[currIndex].itemCount = updatedCount;
  updateUserDataWithLocalStorage(userData);
  updateTotal();
}
function subItemClicked(currIndex, currCount, currPrice) {
  if (currCount.innerText == "1") {
    return;
  }
  currIndex = currIndex[currIndex.length - 1];
  let updatedCount = +currCount.innerText - 1;

  let tempPrice = currPrice.innerText.slice(1, currPrice.length);
  console.log("tempPrice  =  " + tempPrice);
  let updatedPrice = +tempPrice - userData[currIndex].itemPrice;
  console.log(updatedPrice);

  document.getElementById(`item-count-${currIndex}`).innerText = updatedCount;
  document.getElementById(`item-price-${currIndex}`).innerText =
    "$" + updatedPrice;

  userData[currIndex].itemCount = updatedCount;
  updateTotal();
  updateUserDataWithLocalStorage(userData);
}

let itemOnePrice = cartItems.addEventListener("click", (e) => {
  console.log(e.target.id);
  // Item Zero
  if (e.target.id == "remove-item-btn-0") {
    document.getElementById("0").style.display = "none";
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
    addItemClicked(e.target.id, itemCount0, itemPrice0);
  }
  if (e.target.id == "sub-btn-0" || e.target.id == "sub-btn-img-0") {
    subItemClicked(e.target.id, itemCount0, itemPrice0);
  }

  // Item One
  if (e.target.id == "remove-item-btn-1") {
    document.getElementById("1").style.display = "none";
  }
  if (e.target.id == "like-item-btn-1") {
    let temp = document.getElementById("like-item-btn-1").src;
    if (temp === "http://127.0.0.1:5500/images/like.svg") {
      console.log("oll");
      document.getElementById("like-item-btn-1").src = "./images/like-red.svg";
    } else {
      console.log("boo" + temp);
      document.getElementById("like-item-btn-1").src = "./images/like.svg";
    }
  }
  if (e.target.id == "add-btn-1" || e.target.id == "add-btn-img-1") {
    addItemClicked(e.target.id, itemCount1, itemPrice1);
  }
  if (e.target.id == "sub-btn-1" || e.target.id == "sub-btn-img-1") {
    subItemClicked(e.target.id, itemCount1, itemPrice1);
  }

  // Item Two
  if (e.target.id == "remove-item-btn-2") {
    document.getElementById("2").style.display = "none";
  }
  if (e.target.id == "like-item-btn-2") {
    let temp = document.getElementById("like-item-btn-2").src;
    if (temp === "http://127.0.0.1:5500/images/like.svg") {
      console.log("oll");
      document.getElementById("like-item-btn-2").src = "./images/like-red.svg";
    } else {
      console.log("boo" + temp);
      document.getElementById("like-item-btn-2").src = "./images/like.svg";
    }
  }
  if (e.target.id == "add-btn-2" || e.target.id == "add-btn-img-2") {
    addItemClicked(e.target.id, itemCount2, itemPrice2);
  }
  if (e.target.id == "sub-btn-2" || e.target.id == "sub-btn-img-2") {
    subItemClicked(e.target.id, itemCount2, itemPrice2);
  }
});
