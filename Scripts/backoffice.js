const nameInput = document.getElementById("name");
const descriptionInput = document.getElementById("description");
const timeInput = document.getElementById("createdAt");
const priceInput = document.getElementById("form");
[0];

const form = document.getElementsByTagName("form")[0];
const URL = "https://striveschool-api.herokuapp.com/api/product/";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newProduct = {
    name: nameInput.value,
    description: descriptionInput.value,
    time: timeInput.value,
    price: priceInput.value,
  };
});
