let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteAllBtn = document.getElementById("delete-all-btn");
const tabBtn = document.getElementById("tab-btn");
const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromStorage) {
  myLeads = leadsFromStorage;
  render(myLeads);
}

inputBtn.addEventListener("click", function saveInput() {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

deleteAllBtn.addEventListener("click", function deleteAllLeads() {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let storedLeads = localStorage.getItem("myLeads");
  storedLeads = JSON.parse(storedLeads);

  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
        <a href='${leads[i]}' target='_blank'>
            ${leads[i]}
        </a>
    </li>`;
  }

  ulEl.innerHTML = listItems;
}

//   ulEl.innerHTML += render();
//   ALTERNATIVE
//   const li = document.createElement("li");
//   li.textContent = myLeads[i];
//   ulEl.append(li);
