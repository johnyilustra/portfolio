const buttons =
document.querySelectorAll(".filters button");

const projects =
document.querySelectorAll(".project");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        projects.forEach(project => {

            if(
                filter === "all" ||
                project.dataset.category === filter
            ){

                project.style.display = "";

            }else{

                project.style.display = "none";

            }

        });

    });

});
