const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const generateHtml = (todo) => {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center text-light">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim(); // trim method delete all fucking spaces in type a todo : "    buy milk   " ----> "buy milk"
  if (todo.length) {
    generateHtml(todo);
    addForm.reset();
  }
});
//delete todos

list.addEventListener("click", (e) => {
  e.preventDefault();
  console.log();

  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

// searching todos

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((child) => !child.textContent.toLowerCase().includes(term))
    .forEach((child) => child.classList.add("filtered"));
  Array.from(list.children)
    .filter((child) => child.textContent.toLowerCase().includes(term))
    .forEach((child) => child.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
