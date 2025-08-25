const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
    const title = item.querySelector(".accordion-title");
    const content = item.querySelector(".accordion-content");

    title.addEventListener("click", () => {
        for (i = 0; i < accordionItems.length; i++) {

            item.classList.toggle("active");


        }

    });
});