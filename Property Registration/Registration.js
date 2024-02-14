


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



let valid=document.querySelector("#validationCustom01");
valid.addEventListener("keyup",(e)=>{
    valid.value = valid.value.toUpperCase();
})











let btn = document.querySelector(".Read-more-btn");
let cont = document.querySelector(".toggle-content");

btn.addEventListener("click", () => {
    cont.classList.toggle("show");
    if (btn.innerText === "Read More") {
        btn.innerText = "Read Less"
    } else {
        btn.innerText = "Read More"

    }


})

