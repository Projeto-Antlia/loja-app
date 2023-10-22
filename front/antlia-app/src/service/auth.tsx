import api from "../utils/api";
import { isValidCPF, removeCpfMask } from "../utils/cpf-helpers";
import AsyncStorage from '@react-native-async-storage/async-storage';

const PREFIX = "@antlia-app";

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER'
}

export type User = {
  id: string;
  profile_id: string;
  name: string;
  username: string;
  email: string;
  cell_phone: string;
  created_at: Date,
  updated_at: Date,
  roles: Role[]
}

type UserLogged = {
  access_token: string;
  user: User;
}

export const AuthService = {
  /*
   * LOGIN: Testa se o cpf é um documento valido e então faz comunicacao com a api.
   *
   * SUCESS: Se a autentificação for bem sucessida, grava os
   * dados da resposta e entao retorna uma Promisse.result com os dados do usuario.
   *
   * REJECT: se o cpf for inválido ou a autenticação for recusada, irá retornar uma
   * Promisse.reject com uma mensagem descrevendo o motivo.
   */
  login: (username: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
      if (!isValidCPF(username)) {
        reject("CPF inválido");
      }

      const payload = {
        username: removeCpfMask(username),
        password,
      }

      api
        .post("/auth/login", payload)
        .then(({ data }) => {
          AsyncStorage.setItem(PREFIX, JSON.stringify(data));
          setHeaderAutorization(data.access_token);
          resolve(data.user);
        })
        .catch(() => reject("Credenciais invalidas"));
    });
  },

  getLoggedUser: async () => {
    let user = await AsyncStorage.getItem(PREFIX);

    if (!user) return;

    const userLogged: UserLogged = JSON.parse(user);

    setHeaderAutorization(userLogged.access_token);

    return userLogged;
  },

  logout: async () => {
    await AsyncStorage.removeItem(PREFIX);
    removeAuthorization();
  },
};

function removeAuthorization() {
  delete api.defaults.headers.common.Authorization
}

function setHeaderAutorization(token: string | null) {
  api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}