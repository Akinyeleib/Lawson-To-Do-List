window.addEventListener("load",() => {
    // reload = JSON.parse(localStorage.getItem("reload")) || []
    // const saveList = localStorage.getItem("")

    // })

    const taskForm = document.querySelector("#task-form");
    const newTask = document.querySelector("#new_task");
    const listTask = document.querySelector("#tasks");

    taskForm.addEventListener("submit",(e) =>{
        // prevent it from refreshing the page
        e.preventDefault();
        
        const taskValue = newTask.value;

        if(!taskValue){
            alert("Field cannot be empty")
            return;
        }
        
        const task_add = document.createElement("div")
        task_add.classList.add("added-tasks")

        const task_content_add = document.createElement("div");
        task_content_add.classList.add("content");


        task_add.appendChild(task_content_add);

        const task_input =document.createElement("textarea")
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value = taskValue;
        task_input.setAttribute("readonly", "readonly");

        task_content_add.appendChild(task_input)

        const task_actions=document.createElement("div")
        task_actions.classList.add("action")

        const task_edit = document.createElement("button")
        task_edit.classList.add("edit")
        task_edit.innerHTML ="Edit";

        const task_delete = document.createElement("button")
        task_delete.classList.add("delete")
        task_delete.innerHTML ="Delete";
        
        task_actions.appendChild(task_edit)
        task_actions.appendChild(task_delete)       

        task_add.appendChild(task_actions)

        listTask.appendChild(task_add);

        newTask.value = "";

        task_edit.addEventListener('click',() => {
            if(task_edit.innerText.toLowerCase() == "edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                task_edit.innerText ="Save";
            }
            else{
                task_input.setAttribute("readonly","readonly")
                task_edit.innerText ="Edit";
            }
        });

        task_input.addEventListener('keypress',(event) =>{
            click = event.key;
            if(click === "Enter"){
                task_input.setAttribute("readonly","readonly")
                task_edit.innerText ="Edit";
            }
        });

        
        task_delete.addEventListener('click',() => {
            listTask.removeChild(task_add);
        })

        // let myb = JSON.stringify(task_input.value);
        // console.log(myb)
        window.localStorage.setItem("taskForm", task_input.value)
        // let nnm = JSON.parse(localStorage.getItem("taskForm"))
        // console.log(nnm)
    })

})