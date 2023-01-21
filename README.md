# Login 
uma API REST de login construida totalmente com javaScript

## Despendencias

1. Node.js 16.16
2. Servidor MongoDB (local/remoto) 
3. Insomnia (opicional para teste)

## Passo a passo

1. instalar as dependências
~~~ 
    npm i -save
~~~ 
2. criar o arquivo **.env** na raiz do Projeto e configurar as variáveis de ambiente
~~~ 
    MONGO_CONNECTION_URL=
    DATABASE_DATABASE=LonginAR
    DATABASE_HOST=localhost
    DATABASE_PORT=3000
~~~
4. iniciar o banco de dados MongoDB
5. rodar o projeto
~~~
    npm start
~~~

## Passo a passo - Swegger

**1º** Entrar na URL:
```
http://localhost:3000/api-docs
```
**2º** Clicar na rota:
```
POST "/auth/login"
```
**3º** Clicar em **Try it out** localizado no canto superior direito.

**4º** Trocar as variáveis “any” de acordo com o usuário desejado.

**Administrador:**
```
Matrícula: 000001
Senha: admin
```
**Supervisor:**
```
**Matrícula:** 000002
**senha:** admin
```
**Técnico:**
```
Matrícula: 000003
senha: admin
```
**Operador:**
```
Matrícula: 000004
senha: admin
```
**5º** Agora clique em **“Execute”**. Como resposta terá o **“token”**.

**6º** Copie o token gerado.

**7º** Subindo o scroll temos uma opção chamada **“Authorize”**. 

**8º** Em **“Value”** coloque o middleware. (caracter aleatório)

**9º** De um espaço e cole o token copiado no 6º passo.

**10º** Clique em Authorize.

