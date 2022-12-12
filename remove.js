const btn = document.querySelector("#add-btn");

btn.addEventListener("click", () => {

    const button = document.querySelectorAll(".remove-button");
    
    button.forEach(remove => {

        remove.addEventListener("click", () => {

            remove.parentNode.classList.add("removido");

            setTimeout(() => {
                remove.parentNode.remove();
            }, 1000)
        });
    })
})