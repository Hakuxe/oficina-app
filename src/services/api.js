import axios from 'axios';

export const budgetListApi = axios.create({
   baseURL: 'https://my-json-server.typicode.com/codificar/oficina/proposals'
})