const request = require('supertest');
const faker = require('faker');
const app = require('../../../src/app');

describe('CRUD Person', () => {
  it('should create a new register of one person', async () => {
    const createdPerson = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes',
    });
    expect(createdPerson.status).toBe(201);
  });
});
