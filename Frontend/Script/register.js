// to check if the register.html is well connected to the JS console.log('register');

const registerForm = document.getElementById('register');

function registerUser(event) {
    event.preventDefault();
    console.log(event.target.fullname.value);
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let renterPassword = event.target.renterPassword.value;

    if (!fullname || !email || !password || !renterPassword ) {
        alert('All fields required!');
        return;
    }

    //sending to the server
    let userObj = {
        fullname,
        email,
        password,
        renterPassword,
    };

//using fetch API
fetchAPI(userObj, 'auth/signup', 'POST').then((data) => {
    if (data.status) {
      alert(data.mes);
      window.location.href = '../Frontend/login.html';
    }
    else {
      alert(data.mes);
    }
  });
}

registerForm.addEventListener('submit', registerUser);