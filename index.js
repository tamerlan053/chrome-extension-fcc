let myLeads = []
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

let inputBtn = document.getElementById("input-btn");



inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {

let myList = ""    

for (let i = 0; i < myLeads.length; i++) {
//myList += "<li><a target='_blank' href='"+ myLeads[i]+ "'>" + myLeads[i] + "</a></li>"
myList += `<li>
                <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
           </li>`


  //ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" // one method, below is the second one
  /*const li = document.createElement("li")
  li.textContent = myLeads[i]
  ulEl.append(li) */
}

ulEl.innerHTML = myList
}
