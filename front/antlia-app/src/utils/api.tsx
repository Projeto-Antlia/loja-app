import { URL_API } from "../config";
import axios from 'axios';

// Defina a URL base da sua API
const BASE_URL = URL_API;

// Crie uma instância do Axios com as configurações padrão
const apiService = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, 
});

import HttpErrorsService from "../service/errors/errors.service";

apiService.interceptors.response.use(
  (res) => res,
  (err) => {
    HttpErrorsService(err.response);
    return Promise.reject(err);
  }
);

export default apiService;