const request = require('supertest');
const app = require('../../src/app');
const Car = require('../../src/models/rentalModel');

describe('CRUD Car', () => {
  beforeEach(async () => {
    await Car.deleteMany();
  });
  it('should return unauthorized ', async () => {
    const car = await request(app).post('/api/v1/car').send();
    expect(car.status).toBe(401);
  });
});
