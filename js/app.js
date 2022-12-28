function findElement(element, parent = document) {
  return parent.querySelector(element);
}
const elForm = findElement("#form");
const elInput = findElement("#input");
const elClearBtn = findElement("#clearBtn");
const elList = findElement("#list-group");
const elError = findElement("#error");
const products = [];

if (elError.textContent === "") {
  elError.textContent = "No todos yet";
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  //add to array
  if (elInput.value !== "") {
    elError.textContent = "";

    products.push(elInput.value);

    elClearBtn.style.display = "block";
    elInput.value = "";

    //render array
    elList.textContent = "";

    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      const elLi = document.createElement("li");

      elLi.textContent = element;
      elLi.className = "bg-light rounded ps-3 text-dark mt-2";
      elList.appendChild(elLi);
    }
  } else {
    elError.textContent = "Please enter a todos";
  }
  console.log(products);
});

//Clear button
elClearBtn.addEventListener("click", function () {
  elList.textContent = "";
  elClearBtn.style.display = "none";
});
