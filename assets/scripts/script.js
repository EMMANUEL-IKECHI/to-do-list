let toggleAction = document.querySelector(".toggle-action");
let addItem = document.querySelector(".add-item");
let tasks = document.querySelector(".tasks");
let placeholder = document.querySelector(".placeholder");
let submitInput = document.querySelector(".submit");
let inputForm = document.querySelector("form");
let info = document.querySelector('.info');
let sidebar = document.querySelector('.sidebar');
let close = document.querySelector('.close');
let inputRaised = false;
let taskCount = 0;
function createTask() {
    taskCount++;
    let individualTask = document.createElement("div");
    individualTask.setAttribute('class', 'individual-task');
    tasks.appendChild(individualTask); 
    let inputCheck = document.createElement('input');
    inputCheck.setAttribute('type', 'checkbox');
    inputCheck.setAttribute('name', 'task1');
    inputCheck.setAttribute('id', 'task1');
    individualTask.appendChild(inputCheck);
    let taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container');
    individualTask.appendChild(taskContainer);
    let textArea = document.createElement('textarea');
    textArea.setAttribute('readonly', 'true');
    textArea.setAttribute('name', 'created-task');
    textArea.setAttribute('id', 'created-task');
    textArea.value = `${inputForm.task.value}`
    taskContainer.appendChild(textArea);
    let options = document.createElement('div');
    options.setAttribute('class', 'options');
    taskContainer.appendChild(options);
    let edit = document.createElement('span');
    edit.setAttribute('class', 'edit');
    edit.textContent = "Edit";
    options.appendChild(edit);
    let deleteItem = document.createElement('span');
    deleteItem.setAttribute('class', 'delete-item');
    deleteItem.textContent = "x";
    options.appendChild(deleteItem);
    deleteItem.addEventListener("click", ()=> {
        tasks.removeChild(individualTask);
        taskCount--;
        console.log(taskCount);
        if (taskCount<1) {
            placeholder.style.opacity = ".5";

        }
    });
    edit.addEventListener("click", ()=> {
        console.log(edit);
        if (textArea.readOnly ==  true) {
            console.log(true);
            textArea.readOnly = false;
            edit.textContent = "Save";
            edit.style.backgroundColor = 'var(--clr-dk)';
            edit.style.color = '#fff';
        }

        else {
            textArea.readOnly = true;
             edit.textContent = "Edit";
            edit.style.backgroundColor = '#fff';
            edit.style.color = 'var(--clr-dk)';
        }
    })

}


// tasks.innerHTML = "";
function raiseInput() {
    
    placeholder.style.opacity = "0";
    
    if (inputRaised === false) {
        addItem.style.display = "block";
        toggleAction.innerText = "X";
        toggleAction.style.backgroundColor = "#fff";
        toggleAction.style.color = "var(--clr-dk)";
        inputRaised = true;
        sidebar.style.left = "-100%";sidebar.style.left = "-100%";
    }
    
    else {
        toggleAction.style.backgroundColor = "var(--clr-dk)";
        toggleAction.style.color = "#fff";
        toggleAction.innerText = "+";
        addItem.style.display = "none";
        inputRaised = false;
        sidebar.style.left = "-100%";
        if (taskCount<1) {
            placeholder.style.opacity = ".5";

        }
    }
}

toggleAction.addEventListener("click", raiseInput);

// inputForm.addEventListener("submit", formHandler);
function formHandler(e) {
    e.preventDefault();
    console.log(inputForm.task.value);
    toggleAction.style.backgroundColor = "var(--clr-dk)";
    toggleAction.style.color = "#fff";
    toggleAction.innerText = "+";
    addItem.style.display = "none";
    inputRaised = false;
    inputForm.task.value = "";
}

inputForm.addEventListener("submit", formHandler);
submitInput.addEventListener("click", ()=> {
    if (inputForm.task.value.length < 1) {

    }

    else(
        createTask()
    )
});

info.addEventListener("click", ()=>{
    sidebar.style.left = "0";
    console.log("right");
});


close.addEventListener("click", ()=>{
    sidebar.style.left = "-100%"
    console.log("left");
})
// console.log(deleteItem);
// submitInput.addEventListener("click", displayTasks);
// function displayTasks() {
//     inputArray.push(`<div class="individual-task">
//         <input type="checkbox" name="task1" id="task1">
//         <div class="task-container">
//         <textarea  name="created-task" id="created-task" readonly="true">${inputForm.task.value}</textarea>
        
//         <span class="delete-item">x</span>
//         </div>`);

//         tasks.innerHTML="";
//         for (let i = 0; i < inputArray.length; i++) {
//                     tasks.innerHTML += inputArray[i];
//         }
        
//         for (let i = 0; i < deleteItem.length; i++) {
//             console.log(deleteItem[i]);
            
//         }
// }   
//     for (let i = 0; i < deleteItem.length; i++) {
//         deleteItem[i].addEventListener("click", ()=> {
//             inputArray.pop();
//             tasks.innerHTML += inputArray[i];
        
        
//     })
// }