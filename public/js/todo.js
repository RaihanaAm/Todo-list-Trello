
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
console.log(r);

// ************************ tableau vide
let all_div = [];
let div_done = [];
let div_wait = [];
let div_deleted = [];

// ************************************************************* fonction create div **********************
const createDiv = () => {
    let data = input.value
    if (data.length > 0) {
        // ???????????????????????????????????????????????? create div + sa class +add icons
        let newDiv = document.createElement("div");
        newDiv.classList.add("tache");
        all_div.push(newDiv);
        // newDiv.innerText = data ;
        let mdyI = `<i class="fa-solid fa-pen modify " style="color: #fafafa;" id="modify"> </i>`
        let cheI = `<i class="fa-solid check fa-circle-check" style="color: #006110;" id="check"></i>`
        let delI = `<i class="fa-sharp delete fa-solid fa-trash" style="color: #db0404;" id="delete"></i>`
        newDiv.innerHTML = data + mdyI + cheI + delI;
        document.querySelector("#downDiv").appendChild(newDiv);   // add div to page
        input.value = "";
        all_div.push(newDiv); // push f tableu all div

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
                    div_done.push(iconParent);
                    div_wait.pop(iconParent)
                    console.log(div_done);
                    console.log(div_wait);
                    iconParent.classList.add("green");
                } else {
                    div_wait.push(iconParent);
                    iconParent.classList.remove("green");
                    div_done.pop(iconParent);
                    console.log(div_done);
                    console.log(div_wait);
                }
                // iconParent.style.background= "green"
            } //? delete
            else if (e.target.classList.contains("delete")) {
                iconParent.classList.add("red");
                div_deleted.push(iconParent);
                iconParent.remove();
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
        console.log(div_deleted);

    }
};


const selection = () => {

    document.querySelector('#selecy').addEventListener("change", function()  {
        if (this.value == "Done") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (!done.classList.contains("green") || done.classList.contains("red")) {
                    done.remove();
                }
            }
        } else if (this.value == "All taches") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (!done.classList.contains("red")) {
                    document.querySelector("#downDiv").appendChild(done);
                } else {
                    done.remove();
                }
            }

        } else if (this.value == "wait") {
            for (let index = 0; index < all_div.length; index++) {
                let done = all_div[index];
                if (done.classList.contains("green") || done.classList.contains("red")) {
                    done.remove();
                } else {
                    document.querySelector("#downDiv").appendChild(done);
                }
            }

        } else if (this.value == "Deleted") {
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
// *************************************************************** select fonction
const select_item = () => {

    // &&&&&&& quand je click sur all
    select_all.addEventListener("click", () => {


    });
    document.getElementById("test0").addEventListener("click", () => {
        for (let index = 0; index < all_div.length; index++) {
            let done = all_div[index];
            if (!done.classList.contains("red")) {
                document.querySelector("#downDiv").appendChild(done);
            } else {
                done.remove();
            }
        }


    });
    // &&&&&&& quand je click sur Done






    document.getElementById("selecy").options[1].addEventListener("", () => {
        for (let index = 0; index < all_div.length; index++) {
            let done = all_div[index];
            if (!done.classList.contains("green") || done.classList.contains("red")) {
                done.remove();
            } else {
                document.querySelector("#downDiv").appendChild(done);
            }
        }


    });
    // &&&&&&& quand je click sur Wait

    select_wait.addEventListener("click", () => {
    });
    document.getElementById("test1").addEventListener("click", () => {
        for (let index = 0; index < all_div.length; index++) {
            let done = all_div[index];
            if (done.classList.contains("green") || done.classList.contains("red")) {
                done.remove();
            } else {
                document.querySelector("#downDiv").appendChild(done);
            }
        }

    });
    // &&&&&&& quand je click sur delete

    select_deletede.addEventListener("click", () => {

    });
    document.getElementById("test2").addEventListener("click", () => {
        for (let index = 0; index < all_div.length; index++) {
            let done = all_div[index];
            if (!done.classList.contains("red")) {
                done.remove();
            } else {
                document.querySelector("#downDiv").appendChild(done);
            }
        }

    });
    // document.getElementById("test").addEventListener("click", () => {
    //     alert("5")
    //     for (let index = 0; index < div_deleted.length; index++) {
    //         let done = div_deleted[index];
    //         console.log("raih");
    //         document.querySelector("#downDiv").appendChild(done);
    //     }

    // });


}



// *********************** fonction  icons
const icons_check = () => {
};


// ********************* tester******************************
button.addEventListener("click", createDiv);
// select_item();
// const sounds =()=>{
//     let audio =new Audio("start-13691.mp3");
//     audio.play()
// }
// sounds();

// select_item()
selection()

