const toDoText = document.querySelector("#todo-text");
const schedule = document.querySelector("#schedule");
const addButton = document.querySelector("#add-btn");
const actualData = document.querySelector("#date");
const section = document.querySelector("section");
const form = document.querySelector("form");
const erro = document.querySelector("span");

addButton.addEventListener("click", (e) => {

    e.preventDefault();
    
    if(toDoText.value.length && actualData.value.length && schedule.value.length > 0) {
        
        createArticle(toDoText.value, actualData.value, schedule.value);
        erro.classList.add("error-message");
        form.reset();
    } else {

        erro.classList.remove("error-message");
    }

});

function createArticle(texto, date, hour) {

    const article = document.createElement("article");
    section.appendChild(article);

    const articleElements = {

        description: document.createElement("p"),
        horario: document.createElement("div"),
        removeBtn: document.createElement("button"),
    }

    addElement(article, articleElements.description);
    addElement(article, articleElements.horario, "horario");
    addElement(article, articleElements.removeBtn);

    articleElements.description.textContent = texto;

    createSchedule(date, hour);
    createButton();

    function createSchedule(date, hour) {

        const div = articleElements.horario;
        const pData = document.createElement("p");
        const pHora = document.createElement("p");
        const iconData = document.createElement("i");
        const iconHora = document.createElement("i");

        pData.textContent = date;
        pHora.textContent = hour;

        iconData.classList.add("fa-calendar");
        iconHora.classList.add("fa-clock");

        addElement(div, pData);
        addElement(div, pHora);
        
        addElement(pData, iconData, "fa-solid");
        addElement(pHora, iconHora, "fa-solid");
    }

    function createButton() {
        
        const trash = articleElements.removeBtn;
        const icon = document.createElement("i");

        icon.classList.add("fa-trash");
        
        addElement(article, trash, "remove-button");
        addElement(trash, icon, "fa-solid");
    }

    addElement(section, article);
}

function addElement(parent, child, classe) {

    parent.appendChild(child);
    child.classList.add(classe);
}