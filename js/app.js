// const elForm = document.querySelector("#form");
// const elList = document.querySelector("#todo-list");
// const elError = document.querySelector("#error");
// const elClearBtn = document.querySelector("#clear-btn");

// if (elError.textContent === "") {
//   elError.textContent = "No todos yet";
// }
// // console.log(elError.textContent);
// elForm.addEventListener("submit", function (evt) {
//   evt.preventDefault();
//   const input = evt.target.input;

//   if (input.value !== "") {
//     elError.textContent = "";

//     const elTodo = document.createElement("li");
//     elTodo.textContent = input.value;
//     elTodo.className = "rounded ps-3 shadow bg-warning mt-2 text-dark";
//     elList.appendChild(elTodo);
//     input.value = "";
//     elClearBtn.style.display = "block";
//   } else {
//     elError.textContent = "Please enter a todo";
//   }
// });

// elClearBtn.addEventListener("click", function () {
//   elList.textContent = "";
//   elClearBtn.style.display = "none";
// });

function findElement(element, parent = document) {
  return parent.querySelector(element);
}
const elForm = findElement("#form");
const elInput = findElement("#input");
const elClearBtn = findElement("#clearBtn");
const elList = findElement("#list-group");
const elError = findElement("#error");

if (elError.textContent === "") {
  elError.textContent = "No todos yet";
}
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (elInput.value !== "") {
    elError.textContent = "";

    const elTodo = document.createElement("li");
    elTodo.classList = "bg-light rounded ps-3 text-dark mt-2";
    elTodo.textContent = elInput.value;

    elList.appendChild(elTodo);

    elClearBtn.style.display = "block";
    products.push(input.value);

    elInput.value = "";
  } else {
    elError.textContent = "Please enter a todos";
  }
});
//Clear button
elClearBtn.addEventListener("click", function () {
  elList.textContent = "";
  elClearBtn.style.display = "none";
});

//array
const products = [];

for (let i = 0; i < products.length; i++) {
  const element = products[i];
  const elLi = document.createElement("li");

  elLi.textContent = element;
  elLi.className = "bg-light rounded ps-3 text-dark mt-2";
  elList.appendChild(elLi);
}
