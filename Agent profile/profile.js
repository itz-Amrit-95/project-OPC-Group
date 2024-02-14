






(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()



let valid = document.querySelector("#validationCustom01");
valid.addEventListener("keyup", (e) => {
    valid.value = valid.value.toUpperCase();
})


let card = document.querySelectorAll(".context-done");
let readMore = document.querySelectorAll(".show-more-content");
readMore.forEach((reads, index) => {
    reads.addEventListener("click", () => {
        // readMore.forEach(reads=>{reads.classList.remove("active")})
        reads.classList.toggle("active");
        if (reads.innerText === "Read More...") {
            reads.innerText = "Read Less..."
        } else {
            reads.innerText = "Read More..."
        }

        // card.forEach(cards=>{cards.classList.remove("active")})
        card[index].classList.toggle("active")
    })

})





let loadBtn = document.querySelector("#load-btn");

let row = document.querySelector("#row-listing")
loadBtn.addEventListener("click", () => {
    row.classList.toggle("load-property-listing")
})


