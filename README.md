<h1>Desafio Entrevista Nest.js</h1>
<p>Este projeto é um desafio de entrevista em Nest.js, onde o candidato deverá implementar algumas funcionalidades em uma API RESTful. O objetivo do desafio é avaliar as habilidades do candidato em programação com Nest.js e a capacidade de resolver problemas.</p>

<h2>Funcionalidades</h2>

<p>O candidato deverá implementar as seguintes funcionalidades:</p>

<ul>
    <li>Cadastrar veiculos na API;</li>
    <li>Cadastrar empresas na API;</li>
    <li>Constrole de entrada e saida de veiculos.</li>
</ul>

<h2>Requisitos</h2>

<p>Para executar o projeto em seu ambiente local, você precisará ter os seguintes softwares instalados:</p>

<ul>
    <li><a href="https://nodejs.org/">Node.js</a> (versão 14 ou superior)</li>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
</ul>

<h2>Instalação</h2>

<p>Siga os passos abaixo para instalar e executar o projeto em seu ambiente local:</p>

<ol>
<li>Clone este repositório em sua máquina:</li>
    
        git clone https://github.com/OctavioJunior/desafio-entrevista-nestjs.git

<li>Entre na pasta do projeto:</li>

        cd desafio-entrevista-nestjs/parking-project

<li>Instale as dependências do projeto:</li>

        npm install

<li>Crie um arquivo `.env` na raiz do projeto, com as seguintes variáveis de ambiente:</li>

        JWT_SECRET= <token_jwt>

        DB_HOST= <host_db>
        DB_USERNAME= <username_db>
        DB_PASSWORD= <password_db>
        DB_SCHEMA= <schema_db>

<p>    Substitua `host_db` pela URL do host do MySQL, `username_db` pelo usuário do MySQL, `password_db` pela senha do MySQL e `schema_db` pelo nome do banco de dados do MySQL. Substitua `token_jwt` por uma string aleatória para ser usada como chave secreta na geração de tokens JWT.</p>

<li>Inicie o servidor:</li>

        npm run start:dev

</ol>

<h2>Utilização</h2>

<p>A API possui uma documentação em Swagger, que pode ser acessada em http://localhost:3000/api após a inicialização do servidor. A documentação lista todos os endpoints disponíveis na API e os seus respectivos parâmetros e respostas.</p>
<p>Para cadastrar um usuário, faça uma requisição POST para o endpoint `/users` com o seguinte corpo:</p>

<pre><code>{
"email": "email@example.com",
"password": "123456",
"typeUser": 2
}</code></pre>

O servidor irá retornar um token JWT, que será necessário para as requisições que requerem autenticação.

Para autenticar um usuário, faça uma requisição POST para o endpoint `/auth` com o seguinte corpo:

<pre><code>{
"email": "email@example.com",
"password": "123456",
"typeUser": 2
}</code></pre>

<p>Para cadastrar um veiculo, faça uma requisição POST para o endpoint `/vehicle` com o seguinte corpo:</p>

<pre><code>{
"vehicleBrand": "Ford";
"vehicleModel": "Ka";
"vehicleColor": "Preto";
"vehicleType": "Carro";
"vehiclePlate": "JBD0688";
}</code></pre>

<p>Para cadastrar uma empresa, faça uma requisição POST para o endpoint `/company` com o seguinte corpo:</p>

<pre><code>{
"companyName": "DrConsulta",
  "cnpj": "12.123.123/0002-25",
  "companyAddress": "Rua 3",
  "companyPhone": 51999999999,
  "numberOfCarParking": 30,
  "numberOfMotorcycleParking": 30
}</code></pre>

A requisição deve incluir um cabeçalho `Authorization` com o valor `token_jwt`, substituindo `token_jwt` pelo token JWT obtido na autenticação.

Ex:
Para listar os veiculos cadastrados, faça uma requisição GET para o endpoint `/vehicle`. A requisição deve incluir um cabeçalho `Authorization` com o valor `token_jwt`, substituindo `token_jwt` pelo token JWT obtido na autenticação.

<h2>Tecnologias utilizadas</h2>

<p>Este projeto foi desenvolvido utilizando as seguintes tecnologias:</p>

<ul>
    <li><a href="https://nestjs.com/">Nest.js</a> (framework para Node.js)</li>
    <li><a href="https://typeorm.io/">TypeORM</a> (ORM para Node.js)</li>
    <li><a href="https://swagger.io/">Swagger</a> (ferramenta de documentação de APIs)</li>
    <li><a href="https://www.mysql.com/">MySQL</a> (banco de dados relacional)</li>
</ul>
