const addBtn = document.querySelector("button").addEventListener(`click`, 
function () {
   let listElement = document.createElement("li");
   listElement.innerHTML = document.querySelector("#goal").value;
   document.querySelector("#app ul").appendChild(listElement);
   
}
);