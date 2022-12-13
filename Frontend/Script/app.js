const API = "http://localhost:5000/api/v1";

async function fetchAPI(data, endpoint, method) {
    try {
        const response = await fetch(`${API}/${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data), //converting the object to a JSON file
        });

        const result = await response.json(); //conerting the response back to object
        console.log(result);
        return result;
    } 
    catch (error) {
        console.log(error);
    }
}