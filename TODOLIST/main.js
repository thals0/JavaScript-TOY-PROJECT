// let addInputBar = document.querySelectorAll(".add");
// let InputBar1 = document.querySelector(".todo-input1");
// let InputBar2 = document.querySelector(".todo-input2");
// let InputBar3 = document.querySelector(".todo-input3");
// let InputBtn1 = document.querySelector(".submit1");
// let InputBtn2 = document.querySelector(".submit2");
// let InputBtn3 = document.querySelector(".submit3");
// let todos1 = document.querySelector(".todo-list1");
// let todos2 = document.querySelector(".todo-list2");
// let todos3 = document.querySelector(".todo-list3");

let InputBar = document.querySelectorAll(".todo-input");
let InputBtn = document.querySelectorAll(".submit");
let todos = document.querySelectorAll(".todo-list");

// querySelectorAll로하면 왜 안되지? 한꺼번에 처리하고싶은데
for (let i = 0; i < InputBtn.length; i++) {
  InputBtn[i].addEventListener("click", function (e) {
    e.preventDefault();
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(InputBar[i].value));
    todos[i].appendChild(li);
    InputBar[i].value = "";
  });
}

// function onSubmit(e) {
//   e.preventDefault();
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(InputBar.value));
//   todos.appendChild(li);
//   InputBar.value = "";
// }

// InputBtn1.addEventListener("click", function (e) {
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(InputBar1.value));
//   todos1.appendChild(li);
//   InputBar1.value = "";
// });
// InputBtn2.addEventListener("click", function (e) {
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(InputBar2.value));
//   todos2.appendChild(li);
//   InputBar2.value = "";
// });
// InputBtn3.addEventListener("click", function (e) {
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(InputBar3.value));
//   todos3.appendChild(li);
//   InputBar3.value = "";
// });
