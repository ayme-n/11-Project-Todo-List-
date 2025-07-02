import delete_btn from "./delete_btn.svg"
import expand_btn from "./expand.svg"
import green from "./green.svg"
import red from "./red.svg"
import yellow from "./yellow.svg"
import add from './add.svg'
import return_btn from "./return.svg"



export function ADD_Project(){


    const id = Date.now() //when deleteing id btn = id div

    const Projects = document.querySelector(".Projects")

    const remove = document.createElement("div")
    
    //clas name inside File
    remove.innerHTML = delete_btn

    const expand = document.createElement("div")

    expand.innerHTML = expand_btn

/*
    const title = document.createElement("input")
    title.type = "text"
    title.placeholder="Enter Project name"
*/


    const title = document.createElement("h3")

    title.textContent =  prompt("Enter Project Name")

    const Project = document.createElement("div")
    Project.id = id
    Project.appendChild(remove)

    Project.appendChild(title)
    
    Project.appendChild(expand)

    
    Projects.appendChild(Project)

//????

 

    
    //clas name inside File
  
}


export function Init_Todo_Page(){
       const Todos = document.querySelector(".Todos")

    Todos.style.display="none"
    
    const add_btn = document.createElement("div")
    add_btn.className="todo"
    add_btn.className="add_btn"

      add_btn.innerHTML = add
    Todos.appendChild(add_btn)
  
  const header = document.querySelector(".title")

    const title_todo = document.createElement("h3")
    title_todo.textContent = ""
    
    const return_btnX = document.createElement("div")
    return_btnX.innerHTML = return_btn

    header.appendChild(return_btnX)
    header.appendChild(title_todo)

    Todos.appendChild(header)
}


export function Remove_Project(target){
    const id = target.parentElement.parentElement.id;
    const Target = document.getElementById(id)
    console.log(Target)
    Target.remove()


}


export function Display_Project_Todo(target){

    const id = target.parentElement.parentElement.id;
    const project = document.getElementById(id)
    //Display Todo of this ID Div


    const title_proj = document.querySelector(".title h3")
    title_proj.textContent = project.textContent


    const Projects = document.querySelector(".Projects")
    const title = document.querySelector(".container > h3")
    const Todos = document.querySelector(".Todos")
    
    Projects.style.display ="none"
    title.style.display="none"
    Todos.style.display="grid"

    const project_title = Todos.querySelector(".title h3")

    
    const Divs = Todos.querySelectorAll(":scope > div")

    Divs.forEach(div => {

        console.log(project_title.textContent)
                console.log(div.classList)
        console.log(div.classList)

        if((div.classList.contains(project_title.textContent.split(" ")))||div.classList[0]=="add_btn"||div.classList[0]=="title"){
            div.style.display = "grid"
        }
        else {
    div.style.display = "none";

  }
     
    });

   



}

export function Add_Todo(target){

    //link project with todo

    const id_project = target.parentElement.parentElement;
    //const project = document.getElementById(id_project)
    const header = id_project.querySelector("h3")
    const id2 = header.textContent

        const todo = document.createElement("div")
    console.log("id 2 : " + id2)
    todo.classList.add(id2.split(" "))

    const id = Date.now()

    const h3 = document.createElement("h3")
    
    h3.textContent = prompt("Enter title")



    todo.classList.add("todo")

    const p = document.createElement("p")


    p.textContent = prompt("Enter descreption")

//
    const Todos = document.querySelector(".Todos")



    const remove = document.createElement("div")
    remove.innerHTML = delete_btn


    let priority = prompt("enter priority (red-green-yellow)")
    

    const prio = document.createElement("div")


    if(priority=="red")
    {
        prio.innerHTML = red

    }
    else
    {

        if(priority=="yellow")
        {
            prio.innerHTML = yellow
        }
        else{
            prio.innerHTML = green

        }
    }

    p.className="my-textarea"
    p.style.margin=0
    todo.id=id




    const date = prompt("Enter a date (YYYY-MM-DD):")

    const date_h3 = document.createElement("h5")
    date_h3.className = "dueDate"
    date_h3.textContent = date


    

    todo.appendChild(remove)
    todo.appendChild(h3)
    todo.appendChild(p)
    prio.className="priority"
    todo.appendChild(prio)
    todo.appendChild(date_h3)
    Todos.appendChild(todo)

      
    
}


export function Return_to_Projects(){



    const Projects = document.querySelector(".Projects")
    const title = document.querySelector(".container > h3")
    const Todos = document.querySelector(".Todos")
    Projects.style.display ="grid"
    title.style.display="block"
    Todos.style.display="none"
}