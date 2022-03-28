// fetch data from api with fetch api

fetch('https://sabbir-api.herokuapp.com/clients')
    .then(r => r.json())
    .then(d => console.log(d))



// fetch data from api with async await
async function data() {

    try {
        const r = await fetch('https://sabbir-api.herokuapp.com/clients')
        const d = await r.json()
    } catch (e) {
        console.log(e)
    }

};

data();