const toDoText = document.querySelector("#todo-text");
const schedule = document.querySelector("#schedule");
const addButton = document.querySelector("#add-btn");
const actualData = document.querySelector("#date");

addButton.addEventListener("click", () => {

    const time1 = new Date()
    const time2 = time1.getUTCHours();

    const time3 = "8:25:30";

    if(time3 > time2) console.log('maior');
    else console.log("meno");

    console.log(time2);
})