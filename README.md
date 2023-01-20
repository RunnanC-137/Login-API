# Login-AR
uma API REST 

## Despendencias

1. Node.js 16.16
2. Servidor (local remoto) 
3. Base de dados mysql 8

## Passo a passo

1. **npm install**
~~~ 
    npm i -save
~~~ 
2. criar o arquivo **.env** na raiz do Projeto e configurar as variáveis de ambiente
~~~ 
    DATABASE_USERNAME=root
    DATABASE_PASSWORD=admin
    DATABASE_DATABASE=vale_db
    DATABASE_HOST=127.0.0.1
    DATABASE_PORT=3307
~~~
4. iniciar o banco de dados
5. **npx sequelize-cli db:migrate**
6. **npx sequelize-cli db:seed:all**
5. **npm start**

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

