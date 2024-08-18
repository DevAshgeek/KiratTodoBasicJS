const todoinput = document.querySelector("#in1");
const todolist = document.querySelector("#todolist");
const addbtn = document.querySelector("#addbtn");

let counter = 0;

addbtn.addEventListener('click', addtodo);

function addtodo() {
    const todoitem = document.createElement("div");
    todoitem.setAttribute("id", `tditem${++counter}`);
    todoitem.setAttribute("class", `tditm`);

    todoitem.innerHTML = `
        <span>${todoinput.value}</span>
        <button>Edit</button>
        <button>Delete</button>
    `;

    const editBtn = todoitem.querySelector("button:nth-child(2)");
    const deleteBtn = todoitem.querySelector("button:nth-child(3)");

    editBtn.addEventListener('click', () => edititem(todoitem));
    deleteBtn.addEventListener('click', () => deleteitem(todoitem));

    todolist.appendChild(todoitem);
    todoinput.value = ''; // Clear the input field
}

function deleteitem(todoitem) {
    todolist.removeChild(todoitem);
}

function edititem(todoitem) {
    const span = todoitem.querySelector("span");
    const txtvalue = span.innerText;

    todoitem.innerHTML = `
        <input type="text" value="${txtvalue}"/>
        <button>Update</button>
    `;

    const updateBtn = todoitem.querySelector("button");
    updateBtn.addEventListener('click', () => updateitem(todoitem));
}

function updateitem(todoitem) {
    const input = todoitem.querySelector("input");
    const inpval = input.value;

    todoitem.innerHTML = `
        <span>${inpval}</span>
        <button>Edit</button>
        <button>Delete</button>
    `;

    const editBtn = todoitem.querySelector("button:nth-child(2)");
    const deleteBtn = todoitem.querySelector("button:nth-child(3)");

    editBtn.addEventListener('click', () => edititem(todoitem));
    deleteBtn.addEventListener('click', () => deleteitem(todoitem));
}