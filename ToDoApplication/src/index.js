console.log("ToDo Application");

const tasks = [];

document.addEventListener("DOMContentLoaded", () => {});

let dateDiv = document.getElementById("date");
let date = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
dateDiv.innerText = date;

// add the task to do the list
let newtodo = document.getElementById("new-todo");
let add = document.querySelector(".add-button");
add.addEventListener("click", Newtodo);
function Newtodo() {
  // store the task in array
  let errorExit = document.querySelector("#error");

  if (newtodo.value != "") {
    console.log( errorExit.innerText)
    if (errorExit.innerHTML) {
      errorExit.innerText = "";
    }
    tasks.push({
      id: `task${tasks.length + 1}`,
      taskName: newtodo.value,
      status: "progress",
    });
    //add to list
    addtoList();
  } else {
    if (!errorExit.innerText) {
      error.innerText = "Please enter the task";
    }
  
}
newtodo.value = "";
}

function addtoList() {
  let card = document.querySelector(".list-card");
  card.innerHTML = "";
  tasks.forEach((todo) => {
    let task = document.createElement("div");
    let taskname = todo.taskName;
    task.setAttribute("class", "task");

    let taskContent = document.createElement("div");
    taskContent.setAttribute("class", "task-content");

    let input = document.createElement("input");
    input.setAttribute("class", "checkbox");
    input.setAttribute("name", todo.id);
    input.setAttribute("type", "checkbox");

    let label = document.createElement("label");
    label.setAttribute("id", todo.id);
    if (todo.status === "completed") {
      input.setAttribute("checked", true);
      let strike = document.createElement("strike");
      strike.innerText = taskname;
      label.append(strike);
    } else {
      label.innerText = taskname;
    }
    taskContent.append(input, label);
    task.append(taskContent);
    card.append(task);
  });
}

// when progress changed
let card = document.querySelector(".list-card");
card.addEventListener("change", (event) => {
  let taskCompleted = document.querySelector(`#${event.target.name}`);
  let work = taskCompleted.textContent;

  if (event.target.checked) {
    // checked
    let strike = document.createElement("strike");
    strike.innerText = work;
    taskCompleted.innerText = "";
    taskCompleted.append(strike);
    tasks.forEach((obj) => {
      if (obj.name == event.target.name) {
        obj.status = "completed";
      }
    });
  } else {
    //unchecked
    taskCompleted.innerHtml = "";
    taskCompleted.innerText = work;
    tasks.forEach((obj) => {
      if (obj.name == event.target.name) {
        obj.status = "progress";
      }
    });
  }
});

//reset todo list
let reset = document.querySelector("#reset-button");
reset.addEventListener("click", () => {
  let card = document.querySelector(".list-card");
  card.innerHTML = "";
  tasks.shift();
  //console.log(tasks);
});
