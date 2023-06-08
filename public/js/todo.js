
let input = document.querySelector("input");
console.log(input);
let button = document.querySelector("button");
let contenu = document.querySelector(".downDiv");
let modif_icon = document.querySelector("#modify");
let check_icon = document.querySelector("#check");
let delete_icon = document.querySelector("#delete");




// ******************* createDiv **********************

const createDiv = () => {
    let data = input.value
    if (data.length > 0) {
        // ? create div + sa class
        let newDiv = document.createElement("div");
        newDiv.classList.add("tache");
        // ? add icons 

        // newDiv.innerText = data ;
        let mdyI = `<i class="fa-solid fa-pen modify " style="color: #fafafa;" id="modify"> </i>`
        let cheI = `<i class="fa-solid check fa-circle-check" style="color: #006110;" id="check"></i>`
        let delI = `<i class="fa-sharp delete fa-solid fa-trash" style="color: #db0404;" id="delete"></i>`
        newDiv.innerHTML = data + mdyI + cheI + delI;
        document.querySelector("#downDiv").appendChild(newDiv);
        input.value = "";

        document.addEventListener("click", (e) => {
            let iconParent = e.target.parentElement;
            // let firstChild =e.target.firstChild
            //? modify
            if (e.target.classList.contains("modify")) {
                if (iconParent.classList.contains("tache")) {
                    let modification = prompt("modify ur tache");
                    if (modification.length > 0) {
                        iconParent.innerHTML = modification + mdyI + cheI + delI;
                    }

                    
                }
            } //? cheeck
            else if (e.target.classList.contains("check")) {
                if (!iconParent.classList.contains("green")) {
                    iconParent.classList.add("green")
                } else {
                    iconParent.classList.remove("green")
                }
                // iconParent.style.background= "green"
            } //? delete
            else if (e.target.classList.contains("delete")) {
                iconParent.classList.remove("tache");
                iconParent.innerText = null;
                // let confirmation = confirm(" are u sure ?");
                // if (confirmation == true) {
                //     iconParent.classList.remove("tache");
                //     iconParent.innerHTML = null;
                // }

            }
        })
        // mdyI.addEventListener("click",()=>{
        //     let modification =prompt("modify ur tache");
        //     newDiv.innerHTML= modification + mdyI + cheI +delI;
        // })
    }
}
const modify = () => {
    let modification = prompt("modify ur tache");
    newDiv.innerText = modification;
}
const remove = () => {
    newDiv.classList.remove("tache");
    newDiv.innerText = null;
}




// ********************* tester******************************
button.addEventListener("click", createDiv);



