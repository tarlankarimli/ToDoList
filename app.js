// start valued variables
let TaskData = [];
const addBtn = document.querySelector('.fa-plus-circle');
const sliderBtn = document.querySelector('.fa-chevron-right');
const uploadBtn = document.querySelector('.fa-arrow-circle-up');
let modalDisplay = document.querySelector('.task-modal');
let newOrEditedTask = document.querySelector('#new-task');
let isEdit = false;
let editedIndex;
let checked = false;
let taskID = -1;
let waitedContent = document.querySelector('.waited-content');

// Display task modal 
addBtn.addEventListener("click", () => {
    modalDisplay.style.display = "flex";
})
// Push new or edited tasks to TaskData
uploadBtn.addEventListener("click", () => {
    // check if input value is null
    if (newOrEditedTask.value === "") {
        document.querySelector('.input-error').style.display = "block";
        // check is edit
    } else if (isEdit === true) {
        TaskData[editedIndex].content = newOrEditedTask.value;
        let listTask = document.querySelector(`#list-task-${editedIndex}`);
        listTask.innerHTML = "";
        let textNode = document.createTextNode(newOrEditedTask.value);
        listTask.appendChild(textNode);
        isEdit = false;
        modalDisplay.style.display = "none";
        newOrEditedTask.value = "";
    }
    // creating new task
    else {
        let content = newOrEditedTask.value;
        taskID++;
        TaskData.push({ id: taskID, content: content, completed: false })
        newOrEditedTask.value = "";
        createTaskNode(taskID);
        modalDisplay.style.display = "none";
        document.querySelector('.input-error').style.display = "none";
    }
})

// Create html nodes to display task
const createTaskNode = (id) => {
    let editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit";
    editIcon.addEventListener('click', () => { editTask(id) })

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-toilet";
    deleteIcon.setAttribute("id", `list-item-delete${id}`)
    deleteIcon.addEventListener("click", () => { deleteTask(id) });

    let checkIcon = document.createElement("i");
    checkIcon.className = "far fa-square";
    checkIcon.setAttribute("id", `list-item-check${id}`)
    checkIcon.addEventListener('click', ()=> {checkTask(id)})

    let waitedTaskBtns = document.createElement("div");
    waitedTaskBtns.className = "waited-task-btns";

    let listTask = document.createElement("div");
    listTask.className = "list-task";
    listTask.setAttribute("id", `list-task-${id}`)
    let textNode = document.createTextNode(TaskData[id].content);
    listTask.appendChild(textNode);
    listTask.setAttribute("draggable", true);

    let waitedTask = document.createElement("div");
    waitedTask.className = "waited-task";
    waitedTask.setAttribute("id", `list-item-${id}`);

    waitedTaskBtns.appendChild(editIcon);
    waitedTaskBtns.appendChild(deleteIcon);
    waitedTaskBtns.appendChild(checkIcon);
    waitedTask.appendChild(listTask);
    waitedTask.appendChild(waitedTaskBtns);
    waitedContent.appendChild(waitedTask);
}
//  delete item
const deleteTask = (id) => {
    const item = document.querySelector(`#list-item-${id}`);
    item.style.display = "none";
};
// edit item
const editTask = (id) => {
    const item = document.querySelector(`#list-task-${id}`);
    document.querySelector('.task-modal').style.display = "flex";
    newOrEditedTask.value = item.innerHTML;
    isEdit = true;
    editedIndex = id;
}
// check task
const checkTask = (id) => {
    checked = !checked;
    const item = document.querySelector(`#list-task-${id}`);
    item.className = checked ? "list-task list-task-style" : "list-task";
    const itemIcon =  document.querySelector(`#list-item-check${id}`);
    itemIcon.className = checked? "far fa-check-square" : "far fa-square";
}



