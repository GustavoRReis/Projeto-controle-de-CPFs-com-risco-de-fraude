# Projeto de Controle de CPFs com Risco de Fraude

Este projeto visa realizar o controle de CPFs que apresentem risco de fraude, adicionando-os em uma lista restrita.

# Configuração mínima

Na sua máquina você deve ter:

 - Node versão 16
 - Docker
 - Docker-compose versão >=1.29.2

# Tecnologias Utilizadas

- Linguagem de Programação: TypeScript
- ORM: Sequelize
- Banco de Dados: MySQL
- Padrão de Codificação: ESLint
- Conteinerização: Docker

# Diagrama do Banco de Dados
<div align="center">
<img src="https://user-images.githubusercontent.com/104792017/218331715-beec9a05-6837-4aa4-bdf4-3af2a802ed2c.png" />
 </div>
            
# Funcionalidades da API
- Adicionar CPFs à lista restrita
- Consultar CPFs na lista restrita
- Remover CPFs da lista restrita
# Instalação
## Passo 1:
- Descompactar o arquivo que contém todos os artefatos necessários para execução do projeto em sua máquina local.
OBS:(Caso tenha optado por esse método, desconsiderar o Passo 2) 
## Passo 2:
- Clone este repositório em sua máquina local.
- Execute um `git clone` na chave SSH em `git@github.com:GustavoRReis/Projeto-controle-de-CPFs-com-risco-de-fraude.git`
OBS:(Caso tenha optado por esse método, desconsiderar o Passo 1)
## Passo 3:
- Com o projeto em sua máquina local, execute o comando npm install na pasta raiz para instalar as dependências.
- `npm install`
## Passo 4:
- O projeto tem um arquivo .env.example, que exemplifica as variaveis de ambiente. Crie um arquivo .env na raiz do projeto e preencha da seguinte forma:
`MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_HOST=localhost 
MYSQL_PORT=3306`
## Passo 5:
- O projeto utiliza um contêiner docker, execute o comando abaixo para subi-lo na aplicação, certifique-se que as portas usadas pelo contêiner não estão sendo utilizadas, caso contrario, sinta-se a vontade para alteração ou desative outros contêineres.
- `docker-compose up -d` para subir.
- `docker logs --tail 1000 -f DB_MAX_MILHAS` para acessar.
## Passo 6:
- Agora vamos criar nosso banco de dados, realize o comando a seguir:
- `npm run db:reset`

## Execução
- Sinta-se a vontade para escolher sua ferramenta para realizar as requisições na API, como, por exemplo, Thunder Client (extensão do VsCode), Postman, Insomnia e etc.

- Utilize o método POST na URL /cpf para cadastrar um novo CPF no banco de dados.
- Utilize o método GET na URL /cpf para buscar por todos os CPFs no banco de dados.
- Utilize o método GET na URL /cpf/{cpf} para buscar apenas um único CPF no banco de dados.
- Utilize o método DELETE na URL /cpf/{cpf} para deletar um CPF no banco de dados.


## Executando testes
- A aplicação conta com testes de integração ja implementados, basta executar o comando `npm run test`


