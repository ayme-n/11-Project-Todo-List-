import "./style.css"

import { ADD_Project } from "./DOM"
import { Remove_Project } from "./DOM"
import { Display_Project_Todo } from "./DOM"
import { Add_Todo } from "./DOM"
import { Return_to_Projects } from "./DOM"
import { Init_Todo_Page } from "./DOM"
//ADD_Project

const ADD_BTN = document.querySelector(".ADD")


ADD_BTN.addEventListener("click",(e)=>{
    e.preventDefault();
    ADD_Project()
})

//Remove_Project/Todo Button


//since remove button doesnt exist yet > attach it to body , any click in body check if it remove (class remove)
document.body.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("remove")) {
        e.preventDefault();
        
        Remove_Project(e.target);
    }
});





//show_Todo



document.body.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("add")) {
        e.preventDefault();
        
        //Add_Todo(e.target);
        Add_Todo(e.target)

    }
});


//ADD_Project

document.body.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("expand")) {
        e.preventDefault();
        
        Display_Project_Todo(e.target);
    }
});


//Return Button

document.body.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("return")) {
        e.preventDefault();
        
        Return_to_Projects();
    }
});

//header+button

Init_Todo_Page();