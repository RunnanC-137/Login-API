# Login 
uma API REST de login construida totalmente com javaScript

## Despendencias

1. Node.js 16.16
2. Servidor MongoDB (local/remoto) 

## Passo a passo

1. instalar as dependências
~~~ 
    npm i -save
~~~ 
2. criar o arquivo **.env** na raiz do Projeto e configurar as variáveis de ambiente
~~~ 
    MONGO_CONNECTION_URL=
    HOST=localhost
    PORT=3000
~~~
4. iniciar o banco de dados MongoDB
5. rodar o projeto
~~~
    npm start
~~~

## Como testar as rotas com o Swagger

**1º** Entrar na URL:
```
http://localhost:3000/api-docs
```
**2º** Cria o Administrador:
```
POST "/login/new"
```
1. Clicar em **Try it out** localizado no canto superior direito.
2. Agora clique em **“Execute”**. Pronto o administrador foi criado

**3º** Logar com o Administrador
```
POST "/login"
```
1. Clicar em **Try it out** localizado no canto superior direito.
2. Agora clique em **“Execute”**.
3. Como resposta terá o **“token”** no Header.
4. Copie o token gerado e coloque no **“Authorize”**
