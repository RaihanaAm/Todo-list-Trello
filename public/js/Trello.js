// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   instances &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let input_task = document.querySelector("input");
let button_add_task = document.querySelector("#add_task");
let select_task = document.querySelector("salect");
let btn_add_column = document.querySelector(".btn_add_column");
let new_column = document.querySelector(".new_column") //tableau  all column
let todo_column = document.querySelector("#to_do"); // li chad column 1
let new_task = document.querySelector("new_task");


let all_div_task = [];
let div_deleted_tasks = [];



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  fonction &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
const new_tasks = () => {
    let data = input_task.value
    if (data.length > 0) {
        // ? create div + sa class +add icons
        let newDiv = document.createElement("div");
        newDiv.classList.add("new_task");
        let modify_task = `<i class="fa-solid fa-pen modify_task " style="color: #89b14a;" > </i>`
        let delete_task = `<i class="fa-sharp delete_task fa-solid fa-trash" style="color: #db0404;" ></i>`

        newDiv.innerHTML = data + modify_task + delete_task;
        document.querySelector("#to_do").appendChild(newDiv);   // add div to page
        input_task.value = "";
        // newDiv.classList.add("todo")
        all_div_task.push(newDiv); // push all new div

        document.addEventListener("click", (e) => {   //*target event
            let icon_parent_task = e.target.parentElement;
            let divselect =document.querySelectorAll(".new_task");

            //^icon modify
            if (e.target.classList.contains("modify_task")) {
                if (icon_parent_task.classList.contains("new_task")) {
                    let modification = prompt("modify ur tache");
                    if (modification.length > 0) {
                        icon_parent_task.innerHTML = modification + modify_task +delete_task;
                    }
                }
            }
            //^icon delete
            else if (e.target.classList.contains("delete_task")) {
                icon_parent_task.classList.add("red");
                div_deleted_tasks.push(icon_parent_task);
                icon_parent_task.remove();
            }
            else if (e.target.classList.contains("doig_icon")) {
                for (let index = 0; index < divselect.length; index++) {
                    let element = divselect[index];
                    element.addEventListener("click", function() {
                        document.querySelector("#doing").appendChild(element);   // add div to page.
                        
                    })
                    
                }
                
            }
            else if (e.target.classList.contains("done_a")) {
                for (let index = 0; index < divselect.length; index++) {
                    let element = divselect[index];
                    element.addEventListener("click", function() {
                        document.querySelector("#donee").appendChild(element);   // add div to page
                    })
                    
                }
                
            }
        })
    }


}









// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&    Events    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
button_add_task.addEventListener("click", new_tasks)

// ** add new column
btn_add_column.addEventListener("click",()=>{
    let newColumn = document.createElement("div");
    newColumn.classList.add("new_column");
    let title = prompt("add title");
    let title1 = document.createElement('h1');
    title1.innerHTML = title;
    newColumn.appendChild(title1);
    document.querySelector("#all_col").appendChild(newColumn);   // add div to page

    
})
