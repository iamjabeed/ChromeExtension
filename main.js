let myLeads = [];
let inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

saveBtn.addEventListener("click", function () {
  let url = inputEl.value;
  if (url === "") {
    alert("Please enter valid item");
  } else {
    myLeads.push(url);
  }
  // myLeads.push(url); above if else optional!!
  // CLEAR INPUT FIELD
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  // console.log(localStorage.getItem("myLeads"));

  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      // "<li><a target='_blank' href='" +myLeads[i] +"'>" +myLeads[i] +"</a></li>";
      // TEMPLATE STRINGS/ LITERALS
      `<li>
        <a target='_blank' href='${myLeads[i]}'>
           ${myLeads[i]} 
        </a>
      </li>`;
    // TO OPEN URL ANCHOR TAG USED---> " + myLeads[i] + "
    ulEl.innerHTML = listItems;

    // const li = document.createElement("li");
    // li.textContent = myLeads[i];
    // ulEl.append(li);
  }
}
