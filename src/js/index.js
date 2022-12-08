const tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {
        if (tab.classList.contains("selected")) {
            return;
        }
        selectTab(tab);
        tradeInformationsTab(tab);
    })
})

function selectTab(tab) {
     const tabSelected = document.querySelector(".tab.selected");
     tabSelected.classList.remove("selected");
     tab.classList.add("selected");
}

function tradeInformationsTab(tab) {
    const informationsSelected = document.querySelector(".informations.selected");
    informationsSelected.classList.remove("selected");
    const idElementInformationsTabs = `informations-${tab.id}`;
    const informatinsToShow = document.getElementById(idElementInformationsTabs);
    informatinsToShow.classList.add("selected");
}