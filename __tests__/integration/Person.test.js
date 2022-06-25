/* eslint-disable no-underscore-dangle */
const request = require('supertest');
const faker = require('faker');
const app = require('../../src/app');
const Person = require('../../src/models/personModel');

describe('CRUD Person', () => {
  beforeEach(async () => {
    await Person.deleteMany();
  });
  it('should create a new register of one person', async () => {
    const createdPerson = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    expect(createdPerson.status).toBe(201);
  });
  it('should return a error of birthday', async () => {
    const createdPerson = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2015',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    expect(createdPerson.status).toBe(400);
  });

  it('should have have conflict of cpf', async () => {
    await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });

    const createSecondPerson = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    expect(createSecondPerson.status).toBe(400);
  });

  it('should return no person ', async () => {
    const people = await request(app).get('/api/v1/person').send();
    expect(people.status).toBe(404);
  });

  it('should return all people ', async () => {
    await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    const people = await request(app).get('/api/v1/person').send();
    expect(people.status).toBe(200);
  });
  it('should return one person by ID ', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    const people = await request(app).get(`/api/v1/person/${person.body._id}`).send();
    expect(people.status).toBe(200);
  });

  it('should delete one person', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    const people = await request(app).delete(`/api/v1/person/${person.body._id}`).send();
    expect(people.status).toBe(204);
  });
  it('should update one person', async () => {
    const person = await request(app).post('/api/v1/person').send({
      name: faker.name.findName(),
      cpf: '131.147.860-49',
      birthDay: '03/03/2000',
      email: faker.internet.email(),
      password: '123456',
      canDrive: 'yes'
    });
    const updatePerson = await request(app).patch(`/api/v1/person/${person.body._id}`).send({
      name: faker.name.findName()
    });
    expect(updatePerson.status).toBe(204);
  });
});
