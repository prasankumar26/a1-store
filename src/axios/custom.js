import axios from 'axios'

const authFetch = axios.create({
    baseURL: 'https://dummyjson.com',
    headers:{
        Accept: 'application/json'
    }
})

export default authFetch