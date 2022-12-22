const API = "https://dark-plum-scallop-belt.cyclic.app/api";
// const API = "http://localhost:5000/api/";

async function fetchAPI(data, endpoint, method) {
    try {
        // const response = await fetch('auth/signup', {
        const response = await fetch(`${API}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data), //converting the object to a JSON file
        });

        const result = await response.json(); //converting the response back to object
        // console.log(result);
        return result;
    } 
    catch (error) {
        console.log(error);
    }
}

