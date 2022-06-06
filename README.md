<h1 align="center">
  <p align="center">Renpass.uol | Desafio Final</p>
</h1>

<p>
  <img src="https://img.shields.io/badge/node-v16.13-brightgreen"/>
  <img src="https://img.shields.io/badge/npm-8.1-green"/>
</p>

## Indice 
[Descrição](#Descrição)

[Funcionalidades](#Funcionalidades)

[Instalação](#Instalação)

[API-Person](#Api-Person)


## Descrição

Api para gerenciar locadora de carros de luxo, tendo o controle de Veiculos disponiveis, com suas caracteristicas, e o cadastro de clientes.


## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realizar cadastro de Pessoas.

:heavy_check_mark: `Funcionalidade 2:` Cadastrar veiculos.

:heavy_check_mark: `Funcionalidade 3:` Listar cadastros realizados, podendo usar busca personalizada para encontrar o cadastro que deseja.

:heavy_check_mark: Funcionalidade 3: Alterar cadastros.



## Instalação

No terminal, clone o projeto:

```bash
git clone https://github.com/felixcandido/Renpass.uol
```
 
Dentro da pasta do projeto, instale as dependencias

```bash
npm install
```

### Iniciando o Servidor 

No terminal inicie o servidor

```bash
npm start
```

## API-Person


### Cadastrar Pessoa
``/api/v1/person/``

```bash
{
    "name": "joaozinho ciclano",
    "cpf": "131.147.860-49",
    "birthDay": "15/03/2000",
    "email": "joazinho@email.com",
    "canDrive": "yes"
}
```
- Todos os Campos são Obrigatorios.
- CPF precisa ser valido.
- canDrive precisa ser **yes**ou **no**.
- birthDay precisa ser maior de 18 anos.
- email deve ser valido

### Atualizar Person
``/api/v1/person/:id``

```bash
{
    "canDrive": "yes"
}
```

- Qualquer campo pode ser atualizado
- Nenhum campo é obrigatorio

### Deletar Person

``/api/v1/person/:id``


### Buscar Person

``/api/v1/person`` <br>
``/api/vi/person?query=value``<br>
``/api/vi/person?limit=1&page=1``

```bash
{
    "people": [
        {
            "_id": "629e0c2973d6da75568b74db",
            "name": "joaozinho ciclano",
            "cpf": "131.147.860-49",
            "birthDay": "2000-03-03T03:00:00.000Z",
            "email": "joazinho@email.com",
            "canDrive": "yes",
            "__v": 0
        }
    ],
    "totalPages": 1,
    "currentPage": 1
}
```

