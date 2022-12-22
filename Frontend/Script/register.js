// to check if the register.html is well connected to the JS
//  console.log('register');

const registerForm = document.getElementById('register');
// console.log(registerForm);

function registerUser(event) {
    event.preventDefault();
    // console.log(event.target.fullname);
    console.log(event.target.fullname.value);
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let renterPassword = event.target.renterPassword.value;

    // console.log(fullname, email, password, renterPassword);

    if (!fullname || !email || !password || !renterPassword ) {
        alert('All fields required!');
        return;
    }

    // sending to the server
    let userObj = {
        fullname,
        email,
        password,
        renterPassword,
    };

//using fetch API
fetchAPI(userObj, 'auth/signup', 'POST').then((data) => {
// fetch('https://dark-plum-scallop-belt.cyclic.app/api/auth/signup', 'POST').then((data) => {
    if (data.status) {
      alert(data.msg); 
    }
    else {
      alert(data.msg);
      window.location.href = '../Frontend/login.html';
    }
  });
}

registerForm.addEventListener('submit', registerUser);