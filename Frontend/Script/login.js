// to check if the register.html is well connected to the JS console.log('register');

const signinForm = document.getElementById('signin');

function signinUser(event) {
    event.preventDefault();
    console.log(event.target.fullname.value);
    let email = event.target.email.value;
    let password = event.target.password.value;

    if (!email || !password ) {
        alert('All fields required!');
        return;
    }

    //sending to the server
    let userObj = {
        email,
        password,
    };

//using fetch API
fetchAPI(userObj, 'auth/signin', 'POST').then((data) => {
    console.log(data);
    if (data.status) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userData', data.user);
      alert(data.mes);
      window.location.href = '../Frontend/dashboard.html';
    }
    else {
      alert(data.mes);
    }
  });
}

signinForm.addEventListener('submit', signinUser);