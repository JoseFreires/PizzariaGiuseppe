import axios from 'axios'


// const dbUser = process.env.dbUser; 
// const dbPassword = process.env.dbPassword;

const api = axios.create({
    baseURL: "http://localhost:3001"
})

export default api;