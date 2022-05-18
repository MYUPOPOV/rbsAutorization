const autorizationForm = document.querySelector('.autorization-form')



autorizationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    window.location='./autorized.html';
})


