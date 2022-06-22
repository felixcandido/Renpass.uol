/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const app = require('../../src/app');
const Rental = require('../../src/models/rentalModel');

describe('CRUD Rental', () => {
  beforeEach(async () => {
    await Rental.deleteMany();
  });
  it('should return required field error ', async () => {
    const createdRental = await request(app).post('/api/v1/rental').send({
      name: 'rental',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          cep: '96200-200',
          number: '1234',
          isFilial: true,
        },
      ],
    });
    expect(createdRental.status).toBe(400);
  });

  it('should create a new registe of rental', async () => {
    const createRental = await request(app).post('/api/v1/rental').send({
      name: 'rentalTeste',
      cnpj: '18.670.085/0011-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          cep: '96200-200',
          number: '1234',
          isFilial: false,
        },
      ],
    });

    expect(createRental.status).toBe(201);
  });
  it('should find a all registe of rental', async () => {
    await request(app).post('/api/v1/rental').send({
      name: 'rentalTeste',
      cnpj: '18.670.085/0011-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          cep: '96200-200',
          number: '1234',
          isFilial: false,
        },
      ],
    });
    const rental = await request(app).get('/api/v1/rental').send();

    expect(rental.status).toBe(200);
  });
  it('should find a rental by id', async () => {
    const createRental = await request(app).post('/api/v1/rental').send({
      name: 'rentalTeste',
      cnpj: '18.670.085/0011-55',
      activities: 'Aluguel de Carros E Gestão de Frotas',
      address: [
        {
          cep: '96200-200',
          number: '1234',
          isFilial: false,
        },
      ],
    });
    const rental = await request(app).get(`/api/v1/rental/${createRental.body._id}`).send();
    expect(rental.status).toBe(200);
  });
});
