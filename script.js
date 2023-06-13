let value = document.querySelector('input');

let div = document.querySelector('div');

let button = document.querySelector('button');

let todos = [];



window.onload = () =>{

    todos = JSON.parse(localStorage.getItem('todos')) || [];

    todos.forEach(x => AddTask(x));

    
}

console.log(todos)

button.addEventListener('click',() =>{

    if(value.value == ""){

        alert("Must Enter One Task")
    }

    else 
    {
    todos.push(value.value);

    AddTask(value.value);

    localStorage.setItem('todos', JSON.stringify(todos))
    
    value.value ='';

    }
    
})



function AddTask(todo){

    let para = document.createElement('p');

    para.classList.add("para");

    para.innerHTML = todo;

    div.appendChild(para)

    para.addEventListener('click',()=>{

        para.style.textDecoration = "line-through"

        remove(todo);
    })

    para.addEventListener('dblclick',()=>{

        remove(todo);
        
        para.remove();
   
    })
}

function remove(todo){

    let index = todos.indexOf(todo)

    if(index > -1){

        todos.splice(index,1)
    }

    localStorage.setItem("todos", JSON.stringify(todos))

   
}