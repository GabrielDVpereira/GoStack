let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");

const todos = localStorage.getItem("todos").split(",");

renderTodos();

function renderTodos() {
  todos.forEach(todo => {
    const li = createNewLi(todo);
    appendOnList(li);
  });
}

function createNewLi(name) {
  const li = document.createElement("li");
  const liName = document.createTextNode(name);
  const link = createNewLinkElement();
  li.appendChild(liName);
  li.appendChild(link);
  return li;
}

function createNewLinkElement() {
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", "#");
  linkElement.setAttribute("onclick", "deleteTodo(this.parentNode)"); //perentNode is li tag

  const linkText = document.createTextNode(" Delete");
  linkElement.appendChild(linkText);

  return linkElement;
}

function appendOnList(li) {
  listElement.appendChild(li);
}

function addTodo() {
  const todoText = inputElement.value;
  const newLi = createNewLi(todoText);
  appendOnList(newLi);

  inputElement.value = "";

  todos.push(todoText);
  saveInStorage();
}

function deleteTodo(element) {
  const indexOfTheElement = todos.indexOf(element.childNodes[0].textContent); //element.textContent returns the same, but with 'delete'
  // ChildNodes[0].textContent returns the text, and de <a> tag in a array, so we take only the first with is the node text and we take up the text with the textContent
  todos.splice(indexOfTheElement, 1);
  saveInStorage();

  listElement.removeChild(element);
}

function saveInStorage() {
  localStorage.setItem("todos", todos);
}

buttonElement.onclick = () => {
  addTodo();
};
