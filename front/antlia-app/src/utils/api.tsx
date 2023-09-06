import { URL_API } from "../config";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Defina a URL base da sua API
const BASE_URL = URL_API;

// Crie uma instância do Axios com as configurações padrão
const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, 
});

export default apiService;