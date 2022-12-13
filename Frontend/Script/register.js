// to check if the register.html is well connected to the JS console.log('register');

const registerForm = document.getElementById('register');

function registerUser(event) {
    event.preventDefault();
    console.log(event.target.fullname.value);
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let renterPassword = event.target.renterPassword.value;

    //sending to the server
    let userObj = {
        fullname,
        email,
        password,
        renterPassword,
    };

//using fetch API
fetchAPI(userObj, '/signup', 'POST');
}




// console.log(registerForm)

registerForm.addEventListener('submit', registerUser);

