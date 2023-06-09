// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  instances &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
let input = document.querySelector("input");
let button = document.querySelector("button");
let contenu = document.querySelector(".downDiv");
let modif_icon = document.querySelector("#modify");
let check_icon = document.querySelector("#check");
let delete_icon = document.querySelector("#delete");
let selects = document.querySelector("select");
let optionss = document.querySelectorAll("option");  //tableau
let select_all = optionss[0]
let select_done = optionss[1];
let select_wait = document.querySelector("#wait");
let select_deletede = document.querySelector("#deleted");
let r = document.getElementById("selecy").options[2]



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& tableau &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

let all_div = [];
let div_done = [];
let div_wait = [];
let div_deleted = [];

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& fonction &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// ******* fonction create new  div **********************
const createDiv = () => {
    let data = input.value
    if (data.length > 0) {
        // ? create div + sa class +add icons
        let newDiv = document.createElement("div");
        newDiv.classList.add("tache");
        // all_div.push(newDiv);
        // newDiv.innerText = data ;
        let mdyI = `<i class="fa-solid fa-pen modify " style="color: #fafafa;" id="modify"> </i>`
        let cheI = `<i class="fa-solid check fa-circle-check" style="color: #006110;" id="check"></i>`
        let delI = `<i class="fa-sharp delete fa-solid fa-trash" style="color: #db0404;" id="delete"></i>`
        newDiv.innerHTML = data + mdyI + cheI + delI;
        document.querySelector("#downDiv").appendChild(newDiv);   // add div to page
        input.value = "";
        all_div.push(newDiv); // push all new div

        // ** icons
        document.addEventListener("click", (e) => {   //*target event
            let iconParent = e.target.parentElement;
            //^icon modify
            if (e.target.classList.contains("modify")) {
                if (iconParent.classList.contains("tache")) {
                    let modification = prompt("modify ur tache");
                    if (modification.length > 0) {
                        iconParent.innerHTML = modification + mdyI + cheI + delI;
                    }
                }
            }
            //^icon cheeck
            else if (e.target.classList.contains("check")) {
                if (!iconParent.classList.contains("green")) {
                    iconParent.classList.add("green");
                    div_done.push(iconParent);
                    div_wait.pop(iconParent)
                    // console.log(div_done);
                    // console.log(div_wait);
                } else {
                    div_wait.push(iconParent);
                    iconParent.classList.remove("green");
                    div_done.pop(iconParent);
                    // console.log(div_done);
                    // console.log(div_wait);
                }
                // iconParent.style.background= "green"
            } //^icon delete
            else if (e.target.classList.contains("delete")) {
                iconParent.classList.add("red");
                div_deleted.push(iconParent);
                iconParent.remove();
                // ? check sure want to delete la tache
                // iconParent.classList.remove("tache");
                // iconParent.innerText = " ";
                // console.log(div_deleted);
                // let confirmation = confirm(" are u sure ?");
                // if (confirmation == true) {
                //     iconParent.classList.remove("tache");
                //     iconParent.innerHTML = null;
                // }
            }
        })
    }
};

// ************************************ fonction select taches *********
const selection = () => {

    document.querySelector('#selecy').addEventListener("change", function () {
        // ^select done
        if (this.value == "Done") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (!done.classList.contains("green") || done.classList.contains("red")) {
                    done.remove();
                }
            }
        } // ^select all taches (all without deleted taches)

        else if (this.value == "All taches") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (!done.classList.contains("red")) {
                    document.querySelector("#downDiv").appendChild(done);
                } else {
                    done.remove();
                }
            }
        }  // ^select wait (no done taches)
        else if (this.value == "wait") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (done.classList.contains("green") || done.classList.contains("red")) {
                    done.remove();
                } else {
                    document.querySelector("#downDiv").appendChild(done);
                }
            }
        }  // ^select deleted taches
        else if (this.value == "Deleted") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (!done.classList.contains("red")) {
                    done.remove();
                } else {
                    document.querySelector("#downDiv").appendChild(done);
                }
            }
        }
    });
}



// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& calles les action + fonctions &&&&&&&&&&&&&&&&&&&&&&&&&&&

button.addEventListener("click", createDiv);
selection()

