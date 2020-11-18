let TaskData = [];

// buttons 
const addBtn = document.querySelector('.fa-plus-circle');
const editBtn = document.querySelector('.fa-edit');
const deleteBtn = document.querySelector('.fa-toilet');
const uncheckBtn = document.querySelector('.fa-square');
const sliderBtn = document.querySelector('.fa-chevron-right');
const uploadBtn = document.querySelector('.fa-arrow-circle-up');
let newTask = document.querySelector('#new-task');

// start valued variables
let taskID = -1;

let waitedContent = document.querySelector('.waited-content');

// Display task modal 
addBtn.addEventListener("click", () => {
    document.querySelector('.task-modal').style.display = "flex";
})
// Push new tasks to TaskData
uploadBtn.addEventListener("click", () => {
    let content = newTask.value;
    taskID++;
    TaskData.push({ id: taskID, content: content, completed: false })
    newTask.value = "";
    waitedContent.innerHTML = "";
    listTasks();
    
    document.querySelector('.task-modal').style.display = "none";
})

const listTasks = () => {
    for (let id = 0; id < TaskData.length; id++) {
        createTaskNode(id)
    }
}
// Create html nodes to display task
const createTaskNode = (id) => {
    let editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit";

    let deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-toilet";

    let checkIcon = document.createElement("i");
    checkIcon.className = "far fa-square";

    let waitedTaskBtns = document.createElement("div");
    waitedTaskBtns.className = "waited-task-btns";

    let listTask = document.createElement("div");
    listTask.className = "list-task";
    let textNode = document.createTextNode(TaskData[id].content);
    listTask.appendChild(textNode);
    listTask.setAttribute("id", id)
    // listTask.setAttribute("draggable", true);

    let waitedTask = document.createElement("div");
    waitedTask.className = "waited-task";

    waitedTaskBtns.appendChild(editIcon);
    waitedTaskBtns.appendChild(deleteIcon);
    waitedTaskBtns.appendChild(checkIcon);
    waitedTask.appendChild(listTask);
    waitedTask.appendChild(waitedTaskBtns);
    waitedContent.appendChild(waitedTask);
}

    // let listTask = document.querySelector('.list-task');
    // deleteBtn.addEventListener("onclick", (e)=> {
    //     let test = e.target
        
    // } )
