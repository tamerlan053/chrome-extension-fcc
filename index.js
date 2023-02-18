let myLeads = []
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

let inputBtn = document.getElementById("input-btn")

let item = localStorage.setItem("myLeads", "www.google.com")
console.log(item)

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeads()
})

function renderLeads() {

let myList = ""    



ulEl.innerHTML = myList
}
