 let your_task ;
 let btn = document.querySelector("#btn1")

 btn.onclick = () => {
  // accessing my task 
  let my_task = document.querySelector(".your-task").value;
// printing it on screen
let list = document.querySelector(".list")
let my_task_list = document.createElement("li");
my_task_list.textContent = my_task;

let btn2 = document.createElement("button")
btn2.className = "remove_button"
btn2.textContent = "X"

 btn2.addEventListener ( "click" , () => {
  my_task_list.remove();

 }
 )
my_task_list.appendChild(btn2)

list.appendChild(my_task_list)
  // let br = document.createElement("br")
  // list.appendChild(br)
  document.querySelector(".your-task").value = ""


}
 