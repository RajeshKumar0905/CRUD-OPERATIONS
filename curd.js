const form = document.querySelector("#new-task-form");
const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const input3 = document.querySelector("#input-3");
const tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
    const input1_value=input1.value.trim();
    const input2_value=input2.value.trim();
    const input3_value=input3.value.trim();
    
    const userdata1=input1.value;
    const userdata2=input2.value;
    const userdata3=input3.value
e.preventDefault();
    if( input1_value == ""){
    e.preventDefault();
    alert("please write the details of the book");
    input1.focus();
    return false;
   }
   if( input2_value == ""){
    e.preventDefault();
    alert("please provide the name of the author!");
    input2.focus();
    return false;
   }
   if( input3_value == ""){
    e.preventDefault();
    alert("please provide the price of the book!");
    input3.focus();
    return false;
   }
   
   const task = document.createElement("div");
   task.classList.add("task");
   task.classList.add("mb-3");
   const content = document.createElement("div");
   content.classList.add("content");
   const heading=document.createElement('h3')
   heading.innerHTML='name of the book'
   content.appendChild(heading)
   const task_input = document.createElement("input");
   task_input.classList.add("text");
   task_input.classList.add("form-control");
   task_input.classList.add("mb-2");
//    task_input=input1.value;
   task_input.value = userdata1;
   task_input.setAttribute("readonly", "readonly");
   task_input.type = "text";
   content.appendChild(task_input);
   task.appendChild(content);
   tasks.appendChild(task);
   
   const actions = document.createElement("div");
   actions.classList.add("actions");
 
   const task_edit = document.createElement("button");
   task_edit.classList.add("edit");
   task_edit.classList.add("btn");
   task_edit.classList.add("btn-warning");
   task_edit.innerHTML = "edit";
   
 
   const task_delete = document.createElement("button");
   task_delete.classList.add("delete");
   task_delete.classList.add("btn");
   task_delete.classList.add("btn-danger");
   task_delete.classList.add("mx-2");
   task_delete.innerHTML = "delete";
 
   actions.appendChild(task_edit);
   actions.appendChild(task_delete);
   task.appendChild(actions);
 
   input1.value = ""
   //  edit user data
 
   task_edit.addEventListener('click', ()=>{
     if(task_edit.innerHTML=="edit"){
       task_input.removeAttribute("readonly");
       task_edit.innerHTML= "Save";
       task_input.focus();
     }else{
       task_input.setAttribute("readonly","readonly");
       task_edit.innerHTML = "edit";
     }
   })
 //   delete user data
 task_delete.addEventListener("click",()=>{
     tasks.removeChild(task)
 })
 e.preventDefault();
 const task1 = document.createElement("div");
 task1.classList.add("task1");
 task1.classList.add("mb-3");
 const content1 = document.createElement("div");
 content1.classList.add("content1");
 const heading1=document.createElement('h3')
 heading1.innerHTML='name of the author'
 content1.appendChild(heading1)
 const task_input1 = document.createElement("input");
 task_input1.classList.add("text");
 task_input1.classList.add("form-control");
 task_input1.classList.add("mb-2");
//    task_input=input1.value;
 task_input1.value = userdata2;
 task_input1.setAttribute("readonly", "readonly");
 task_input1.type = "text";
 content1.appendChild(task_input1);
 task1.appendChild(content1);
 tasks.appendChild(task1);
 
 const actions1 = document.createElement("div");
 actions1.classList.add("actions1");

 const task_edit1 = document.createElement("button");
 task_edit1.classList.add("edit1");
 task_edit1.classList.add("btn");
 task_edit1.classList.add("btn-warning");
 task_edit1.innerHTML = "edit";
 

 const task_delete1 = document.createElement("button");
 task_delete1.classList.add("delete1");
 task_delete1.classList.add("btn");
 task_delete1.classList.add("btn-danger");
 task_delete1.classList.add("mx-2");
 task_delete1.innerHTML = "delete";

 actions1.appendChild(task_edit1);
 actions1.appendChild(task_delete1);
 task1.appendChild(actions1);

 input2.value = ""
 //  edit user data

 task_edit1.addEventListener('click', ()=>{
   if(task_edit1.innerHTML=="edit"){
     task_input1.removeAttribute("readonly");
     task_edit1.innerHTML= "Save";
     task_input1.focus();
   }else{
     task_input1.setAttribute("readonly","readonly");
     task_edit1.innerHTML = "edit";
   }
 })
//   delete user data
task_delete1.addEventListener("click",()=>{
   tasks.removeChild(task1)
})

e.preventDefault();
 const task2 = document.createElement("div");
 task2.classList.add("task2");
 task2.classList.add("mb-3");
 const content2 = document.createElement("div");
 content2.classList.add("content2");
 const heading2=document.createElement('h3')
 heading2.innerHTML='price of the book'
 content2.appendChild(heading2)
 const task_input2 = document.createElement("input");
 task_input2.classList.add("text");
 task_input2.classList.add("form-control");
 task_input2.classList.add("mb-2");
//    task_input=input1.value;
 task_input2.value = userdata3;
 task_input2.setAttribute("readonly", "readonly");
 task_input2.type = "text";
 content2.appendChild(task_input2);
 task2.appendChild(content2);
 tasks.appendChild(task2);
 
 const actions2 = document.createElement("div");
 actions2.classList.add("actions2");

 const task_edit2= document.createElement("button");
 task_edit2.classList.add("edit1");
 task_edit2.classList.add("btn");
 task_edit2.classList.add("btn-warning");
 task_edit2.innerHTML = "edit";
 

 const task_delete2 = document.createElement("button");
 task_delete2.classList.add("delete1");
 task_delete2.classList.add("btn");
 task_delete2.classList.add("btn-danger");
 task_delete2.classList.add("mx-2");
 task_delete2.innerHTML = "delete";

 actions2.appendChild(task_edit2);
 actions2.appendChild(task_delete2);
 task2.appendChild(actions2);

 input3.value = ""
 //  edit user data

 task_edit2.addEventListener('click', ()=>{
   if(task_edit2.innerHTML=="edit"){
     task_input2.removeAttribute("readonly");
     task_edit2.innerHTML= "Save";
     task_input2.focus();
   }else{
     task_input2.setAttribute("readonly","readonly");
     task_edit2.innerHTML = "edit";
   }
 })
//   delete user data
task_delete2.addEventListener("click",()=>{
   tasks.removeChild(task2)
})
})