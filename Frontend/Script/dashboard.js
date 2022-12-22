// const { response } = require("express");

const fullname = document.querySelector('#username');

// if (token) {
    
// }

fetch('https://dark-plum-scallop-belt.cyclic.app/api/auth/profile', {
    method: 'GET',
    withCredentials: true,
    headers: {
        authorisation: `Bearer ${token}`,
    }
})

.then(response => {
    return response.json()
})
.then(result => {
    console.log(result);
    fullname.textContent = result.user.fullname;
})
.catch((error)  => console.log(error));