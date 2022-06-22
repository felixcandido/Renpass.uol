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

[Rental](#Rental)

[Fleet](#Fleet)

[Reserve](#Reserve)

## Descrição

Api para gerenciar locadora de carros de luxo, tendo o controle de toda a operação, desde o cadastro de veiculo, com suas caracteristicas, o cadastro de clientes, frotas, e registro de reservas.

## Ver API

[Renpass-heroku](https://renpass-felix.herokuapp.com/api/v1/api-docs/) 


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

Para iniciar o script de teste
```bash
npm run test
```

### Swagger

Para visualizar o swagger:

``/api/v1/api-docs``

### Login de Usuario

**PATCH**
``/api/v1/authenticate``

Para fazer login deve-se informar o email e senha cadastrado cadastrado

```bash
{
    "email": "joazinho@email.com",
    "password": "123456"
}
```
- Person deve possuir o campo ``"canDrive": "yes"``



## Person


### POST Person
``/api/v1/person/``

```bash
{
    "name": "joaozinho ciclano",
    "cpf": "131.147.860-49",
    "birthDay": "15/03/2000",
    "email": "joazinho@email.com",
    "password": "123456"
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
``/api/v1/person/:id``<br>
``/api/vi/person?query=value``<br>
``/api/vi/person?limit=1&offset=1``

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
    "total": 72,
    "offset": 1,
    "limit": 1,
    "offsets": 72
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

``/api/v1/car/:id``

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
``/api/v1/car/:id``<br>
``/api/vi/car?query=value``<br>
``/api/vi/car?limit=1&offset=1``

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
    "total": 72,
    "offset": 1,
    "limit": 1,
    "offsets": 72
}
```

- É possivel fazer buscas por query params.
- É possivel definir paginação.
- Por padrão, é difinido a pagina 1 com limite de 20 itens.

# Rental

## POST Rental

``/api/v1/rental``

```bash
{
    "name": "Localiza Rent a Car",
    "cnpj": "16.670.085/0001-55",
    "activities": "Aluguel de Carros E Gestão de Frotas",
    "address": [
    {
    "cep": "96200-200",
    "number":"1234",
    "isFilial": false
    }
    ]
}

```

- Deve haver apenas um ``isFilial: false``
- O campo complemento é opcional


## PATCH Rental

``/api/v1/rental/:id``

```bash
{
    "name": "Rent a Car"
}

```

## DELETE Rental

``/api/v1/rental/:id``

## GET Rental

``/api/v1/rental`` <br>
``/api/v1/rental/:id``<br>
``/api/vi/rental?query=value``<br>
``/api/vi/rental?limit=1&offset=1``

```bash
{
   docs: [ {
      "_id": "62a63110a1ec67662c9843b3",
      "name": "Localiza Rent a Car",
      "cnpj": "29.690.085/0248-65",
      "activities": "Aluguel de Carros E Gestão de Frotas",
      "address": [
        {
          "zipCode": "96200-200",
          "street": "Rua General Canabarro",
          "complement": "",
          "district": "Centro",
          "number": "1234",
          "city": "Rio Grande",
          "state": "RS",
          "isFilial": false,
          "_id": "62a63110a1ec67662c9843b4"
        }
      ],
      "__v": 0
    }
  ],
   "total": 72,
    "offset": 1,
    "limit": 1,
    "offsets": 72
}
```

----

## Fleet

## POST Fleet

``api/v1/rental/:idRental/fleet/``

```bash
{
    "id_car": "62a37521a6198003a53407fe",
    "status": "available",
    "daily_value": "190,20",
    "plate": "ABC166"
}
```

- Todos os campos são Obrigatorios.

## PATCH Fleet

``api/v1/rental/:idRental/fleet/:idFleet``

```bash
{
    "daily_value": "50,00"
}
```
- Qualquer campo pode ser atualizado
- ID precisa ser valido

## DELETE Fleet

``api/v1/rental/:idRental/fleet/:idFleet``

## GET Fleet

``api/v1/rental/:idRental/fleet/`` <br>
``api/v1/rental/:idRental/fleet/:idFleet``<br>
``api/v1/rental/:idRental/fleet?query=value``<br>
``api/v1/rental/:idRental/fleet/?limit=1&offset=1``

```bash
{
    
    "fleet": [
        {
            "_id": "62b159586cf9706c7567e22f",
            "id_car": "62a37521a6198003a53407fe",
            "id_rental": "62ae65ca1e512922d216788d",
            "status": "available",
            "daily_value": "190,20",
            "plate": "ABC146",
            "__v": 0
        },
        {
            "_id": "62b1595e6cf9706c7567e233",
            "id_car": "62a37521a6198003a53407fe",
            "id_rental": "62ae65ca1e512922d216788d",
            "status": "available",
            "daily_value": "150,00",
            "plate": "ABC166",
            "__v": 0
        }
    ],
    "total": 2,
    "offset": 1,
    "limit": 100,
    "offsets": 1
}
```

- É possivel fazer buscas por query params.
- É possivel definir paginação.

# Reserve

## POST Reserve

``/api/v1/rental/:idRental/reserve``

```bash
{
    "id_user": "62ae73fee9762bc056a9e546",
    "data_start": "20/11/2021",
    "data_end": "26/11/2021",
    "id_car": "62b1595e6cf9706c7567e233"
}

```


## PATCH Reserve

``/api/v1/rental/:idRental/reserve/:idReserve``

```bash
{
    "data_end": "27/11/2011"
}

```

## DELETE Reserve

``/api/v1/rental/:idRental/reserve/:idReserve``

## GET Rental

``/api/v1/rental/:idRental/reserve/`` <br>
``/api/v1/rental/:idRental/reserve/:idReserve``<br>
``/api/v1/rental/:idRental/reserve?query=value``<br>
``/api/v1/rental/:idRental/reserve?limit=1&offset=1``

```bash
{
  "reserves": [
        {
            "_id": "62b1f8481235f38d6bcc5cbe",
            "id_user": "62ae65ca1e512922d216788d",
            "id_rental": "62ae65ca1e512922d216788d",
            "id_car": "62ae65ca1e512922d216788d",
            "data_start": "20/11/2021",
            "data_end": "30/11/2021",
            "final_value": "500,00",
            "__v": 0
        }
    ],
    "total": 72,
    "offset": 1,
    "limit": 1,
    "offsets": 72
}
```