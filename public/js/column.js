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
        let doing_task = `<i class=" doig_icon fa-light fa-dong-sign m-2"></i>`
        let done_task =`<i class="fa-solid fa-check  done_a"></i>`

        let selection = `<select id="select_column">
                        <option value="todo_task" >to do</option>
                        <option value="Doing_tasks" >Doing</option>
                        <option value="done_tasks" >done</option>
                        </select>`;

    

        newDiv.innerHTML = data + modify_task + delete_task + selection;
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
                        icon_parent_task.innerHTML = modification + modify_task  + selection;
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




















// &&&&&&&&&&&&&&&&&&&&&&&&&&&&& fonctions useless  &&&&&&&&&&&&&&&&&&&&&&&&&&
// **drag
// const drag =()=>{
//     let divselect =document.querySelectorAll(".new_task");
    
//     divselect.forEach(element => {
//         element.addEventListener("click", function() {
//             console.log("ra");
//         })
        
//     });
        
    
// }
// drag();

// ***** select 1
// const sselt =()=>{
    
//     document.addEventListener("click", (e) => {   //*target event
//         let iconParent = e.target.parentElement;
//         document.querySelector('#select_column').addEventListener("change", function () {
//             if (e.target.value == "Done") {
//                 console.log("ra");
//             }
            
//         })

//         })

// }
// *** seelect 2
// const selection = () => {
//     document.querySelector('#select_column').addEventListener("change", function () {
//         // ^select todo task

//         if (this.value == "todo_task") {
//             console.log("ra");
//             // document.querySelector("#doing").appendChild(icon_parent_task);   // add div to page
//             // document.addEventListener("click", (e) => {   //*target event
//             //     let icon_parent_task = e.target.parentElement;
                
//             // })



//         } // ^select Doing_tasks

//         else if (this.value == "Doing_tasks") {
//             document.querySelector("#doing").appendChild(newDiv);   // add div to page


//         }  // ^select done_tasks
//         else if (this.value == "done_tasks") {
//             document.querySelector("#donee").appendChild(newDiv);   // add div to page


//         }
//     });
// }



    // ** add select for loo^p
        // // let selction =document.createElement("select");
        // let myParent = document.querySelector(".new_task");
        // //Create array of options to be added
        // let option_walue = ["to do","doing","done"];
        // //Create and append select list
        // let selectList = document.createElement("select");
        // selectList.id = "mySelect";
        // myParent.appendChild(selectList);
        // //Create and append the options
        // for (let i = 0; i < option_walue.length; i++) {
        //     let option = document.createElement("option");
        //     option.value = option_walue[i];
        //     option.text = option_walue[i];
        //     selectList.appendChild(option);
        // }

