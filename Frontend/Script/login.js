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
// fetchAPI(userObj, 'auth/signin', 'POST').then((data) => {
  // fetch('https://dark-plum-scallop-belt.cyclic.app/api/auth/signin', 'POST').then((data) => {
    fetchAPI(userObj, 'auth/signin', 'POST').then((data) => {
    if (data.status) {
      alert(data.msg);
      
    }
    else {
      localStorage.setItem('token',data.token);
      localStorage.setItem('userData',data.user);
      alert(data.msg);
      window.location.href = '../Frontend/dashboard.html';
    }
  });
}

signinForm.addEventListener('submit', signinUser);