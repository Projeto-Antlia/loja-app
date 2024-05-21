# INICIANDO O PROJETO

## FRONTEND
Para o aplicativo EXPO iniciar o frontend corretamente, deve ser utilizado o IP da máquina do WINDOWS, pois o windows fará o trabalho de direcionar a conexão para o IP INTERNO do WSL.

O aplicativo independendo de estar rodando dentro do wsl ou no windows ele deve ser passado o ip do windows para se conectar com a api, que foi configurado no arquivo `src/config.tsx`.


```bash
// instalar dependências
yarn install

// Iniciar aplicativo app
yarn start

// executar no power shell como administrador
netsh interface portproxy add v4tov4 listenport=19000 listenaddress=0.0.0.0 connectport=19000 connectaddress=<IP-INTERNO-WSL>

```


## BACKEND


#### PRE REQUISITOS
    1. pnpm instalado
    2. docker e docker compose
    3. .env configurado
    4. yarn
    5. wsl
    6. EXPO SDK 49: https://expo.dev/go, caso necessite de efetuar um downgrade.

#### Iniciando MYSQL pelo docker
```bash
docker compose up
```
#### Iniciando API

```bash
//Instalar dependências
pnpm install

//gerar as migrations, criação de tabelas
pnpm db:refresh

//criação do usuário administador, caso não exista.(opcional)
pnpm db:seed


// executar no powershell como administrador
netsh interface portproxy add v4tov4 listenport=3000 listenaddress=0.0.0.0 connectport=3000 connectaddress=<IP-WINDOWS>

```





