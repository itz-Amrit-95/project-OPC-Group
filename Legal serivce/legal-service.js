  // Example starter JavaScript for disabling form submissions if there are invalid fields
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
  })();


  function touppercase(e){
    let inp =document.querySelector("#floatingInput12");
    inp.value = inp.value.toUpperCase()
  }




  let key=document.querySelector("#floatingInput12")
  key.addEventListener("keyup",()=>{
    key.value = key.value.toUpperCase();
  })