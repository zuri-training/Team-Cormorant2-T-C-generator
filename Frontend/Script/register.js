// to check if the register.html is well connected to the JS
//  console.log('register');

const registerForm = document.getElementById('register');
console.log(registerForm);

function registerUser(event) {
    event.preventDefault();
    // console.log(event.target.fullname);
    console.log(event.target.fullname.value);
    let fullname = event.target.fullname.value;
    let email = event.target.email.value;
    let password = event.target.password.value;
    let renterPassword = event.target.renterPassword.value;

    console.log(fullname, email, password, renterPassword);

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
    if (data.status) {
      alert(data.msg);
      // window.location.href = "https://www.google.com.ng";
      location.assign("https://www.google.com.ng");
      // window.location.href = "../Frontend/login.html";
      // window.location.href = "./Frontend/login.html";
      // window.location.href = "/Frontend/login.html";
      // window.location.href = "Frontend/login.html";
      // window.location.href = "./login.html";
      // window.location.href = "../login.html";
      // window.location.href = "../login.html";
      // window.location.href = "./login.html";
      // window.location.href = "..\Frontend\login.html";
    }
    else {
      alert(data.msg);
    }
  });
}

registerForm.addEventListener('submit', registerUser);