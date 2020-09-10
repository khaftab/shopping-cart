const incrementBtn = document.querySelectorAll(".increment");
const decrementBtn = document.querySelectorAll(".decrement");
const productAmt = document.querySelector(".product-amount");
const itemVal = document.querySelectorAll(".itemval");
const totalCartAmt = document.querySelector(".total-cart-amt");
const shippingAmt = document.querySelector(".shipping-charge");
const discountInput = document.querySelector(".discount-input");
const discountBtn = document.querySelector(".discount-btn");
const errorThrow = document.querySelector(".error-throw");

let sum = 0;
const updateAmt = () => {
  sum = 0;
  itemVal.forEach((item) => {
    sum += parseInt(item.innerHTML);
    productAmt.innerHTML = sum;
  });
};

updateAmt();

const totalCart = () => {
  const shippingCharge = parseInt(shippingAmt.dataset.shipping);

  totalCartAmt.innerHTML = shippingCharge + sum;
  return shippingCharge + sum;
};

totalCart();

incrementBtn.forEach((item) => {
  item.onclick = () => {
    if (parseInt(item.previousElementSibling.children[0].value) < 5) {
      // ----increasing the price --------
      item.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.firstElementChild.innerHTML =
        parseInt(
          item.parentElement.parentElement.parentElement.nextElementSibling
            .lastElementChild.firstElementChild.firstElementChild.innerHTML
        ) +
        parseInt(
          item.parentElement.parentElement.parentElement.nextElementSibling
            .lastElementChild.firstElementChild.firstElementChild.dataset.price
        );

      //

      // -xx-increasing the price ---xxxxx-

      //  changing the input value ------

      item.previousElementSibling.children[0].value =
        parseInt(item.previousElementSibling.children[0].value) + 1;

      //  changing the input value -xxxxxx

      //  calling the function to calculate the total amount
      updateAmt();
      totalCart();
    } else {
      alert("You can have maximum 5 items");
      item.previousElementSibling.children[0].style.backgroundColor = "red";
      item.previousElementSibling.children[0].style.color = "#fff";
    }
  };
});

decrementBtn.forEach((item) => {
  item.onclick = () => {
    if (parseInt(item.nextElementSibling.children[0].value) > 1) {
      // ----decreasing the price --------

      item.parentElement.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.firstElementChild.innerHTML =
        parseInt(
          item.parentElement.parentElement.parentElement.nextElementSibling
            .lastElementChild.firstElementChild.firstElementChild.innerHTML
        ) -
        parseInt(
          item.parentElement.parentElement.parentElement.nextElementSibling
            .lastElementChild.firstElementChild.firstElementChild.dataset.price
        );

      item.nextElementSibling.children[0].style.backgroundColor = "#fff";
      item.nextElementSibling.children[0].style.color = "#495057";
      item.nextElementSibling.children[0].value =
        parseInt(item.nextElementSibling.children[0].value) - 1;

      //  changing the input value ------
      updateAmt();
      totalCart();
      //  calling the function to calculate the total amount
    }
  };
});

discountBtn.addEventListener("click", () => {
  if (discountInput.value === "FIRST") {
    totalCartAmt.innerHTML = totalCart() - 15;
    errorThrow.textContent = "Hurray! Code is valid";
    errorThrow.style.color = "green";
  } else {
    errorThrow.textContent = "Oops! Code is invalid";
    errorThrow.style.color = "red";
  }
});

// adding zero afer the price

const totalAmount = () => {};

const addZero = (num) => {
  let value = Number(num);

  const res = num.split(".");

  if (res.length == 1 || res.length == 3) {
    value = value.toFixed(2);
  }

  return value;
};
