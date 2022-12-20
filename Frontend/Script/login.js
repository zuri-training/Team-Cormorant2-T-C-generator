// to check if the register.html is well connected to the JS console.log('register');

const signinForm = document.getElementById('signin');
console.log(signinForm);

function signinUser(event) {
    event.preventDefault();
    console.log(event.target.email.value);
    let email = event.target.email.value;
    let password = event.target.password.value;

    console.log(email, password);

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
    if (data.status) {
      alert(data.msg);
      window.location.href = 'google.com';
    }
    else {
      alert(data.msg);
    }
  });
}

signinForm.addEventListener('submit', signinUser);