import axios from 'axios'

let api = axios.create({
    baseURL:'https://api-de-produtos.herokuapp.com/',

})

export default api;