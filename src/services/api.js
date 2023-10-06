import axios from "axios";

const BurguerApi = axios.create({
    baseURL:"https://hamburgueria-kenzie-json-serve.herokuapp.com/",
    timeout: 5*1000
});

export {BurguerApi};