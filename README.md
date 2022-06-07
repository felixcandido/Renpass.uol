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

[Person](#Person)

[Car](#Car)

## Descrição

Api para gerenciar locadora de carros de luxo, tendo o controle de Veiculos disponiveis, com suas caracteristicas, e o cadastro de clientes.


## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realizar cadastro de Pessoas.

:heavy_check_mark: `Funcionalidade 2:` Cadastrar veiculos.

:heavy_check_mark: `Funcionalidade 3:` Listar cadastros realizados, podendo usar busca personalizada para encontrar o cadastro que deseja.

:heavy_check_mark: Funcionalidade 3: Alterar cadastros.



## Instalação

Clone o projeto:

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

## Person


### POST Person
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
- canDrive precisa ser **yes** ou **no**.
- password precisa ter no minimo 6 digitos.
- birthDay precisa ser maior de 18 anos.
- email deve ser valido.

### PATCH Person
``/api/v1/person/:id``

```bash
{
    "canDrive": "yes"
}
```

- Qualquer campo pode ser atualizado
- ID precisa ser valido
- Nenhum campo é obrigatorio

### DELETE Person

``/api/v1/person/:id``


### GET Person

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

- É possivel fazer buscas por query params.
- É possivel definir paginação.
- Por padrão, é difinido a pagina 1 com limite de 20 itens.

## Car

## POST Car

``/api/v1/car``

```bash
{
    "model": "S10 2.8",
    "type": "sedan",
    "brand": "GM",
    "color": "branco",
    "year": "2021",
    "accessories": [
    {
        "description": "Ar-condicionado"
    },
    {
        "description": "Dir. Hidráulica"
    }
    ],
    "passengersQtd": 5
}
```

- Todos os campos são Obrigatorios.
- É necessario ter ao menos 1 acessorio.
- Não pode haver acessorios repetidos.
- Ano do veiculo deve ser de no minimo 1950 e maximo 2022.
- Quantidade de passageiros não pode ser menor que 1.

## PATCH Car

``/api/v1/car``

```bash
{
    "color": "black",
    "year": "2019"
}
```
- Qualquer campo pode ser atualizado
- ID precisa ser valido
- Nenhum campo é obrigatorio

## DELETE Car

``/api/v1/car/:id``

## GET Car

``/api/v1/car`` <br>
``/api/vi/car?query=value``<br>
``/api/vi/car?limit=1&page=1``

```bash
{
    "cars": [
        {
            "_id": "629f6f9c8db4524fbf5474be",
            "model": "S10 2.8",
            "type": "sedan",
            "brand": "GM",
            "color": "branco",
            "year": 2021,
            "accessories": [
                {
                    "description": "Ar-condicionado"
                },
                {
                    "description": "Dir. Hidráulica"
                }
            ],
            "passengersQtd": 5,
            "__v": 0
        }
    ],
    "totalPages": 1,
    "currentPage": 1
}
```

- É possivel fazer buscas por query params.
- É possivel definir paginação.
- Por padrão, é difinido a pagina 1 com limite de 20 itens.
