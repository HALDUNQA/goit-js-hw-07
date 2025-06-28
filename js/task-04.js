const form = document.querySelector('.login-form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const { email, password } = form.elements;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue === '' || passwordValue === '') {
        alert('All fields must be filled');
        return;
    }
    const formData = {
        email: emailValue,
        password: passwordValue,
    };
    console.log(formData);
    form.reset();  
});