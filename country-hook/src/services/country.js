import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'

const getAll = async () => {
    const response = await axios.get(`${baseUrl}/api/all`)
    console.log(response.data);
    
    return response.data
}

const getByName = async (name) => {
    const response = await axios.get(`${baseUrl}/api/name/${name}`)
    return response
}

export { getAll, getByName }