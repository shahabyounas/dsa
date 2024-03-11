
const API_URL_DSA = 'http://localhost:3000/dsa'

function fetchData(resource = 'LinkedList'){
    return fetch(`${API_URL_DSA}/${resource}`)
    .then(resp => {
        if(!resp.ok){
            throw new Error('Network response was not ok');
        }
        return resp.json()
    })
}

module.exports = fetchData