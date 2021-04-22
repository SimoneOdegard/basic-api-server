'use strict';

const { server } = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('API SERVER:', () => {
  /* ========== create a new item ========== */

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/food').send({ name: 'sushi'})
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('sushi');
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/snack').send({ name: 'cookies'})
    expect(response.status).toBe(201);
    expect(response.body.record.name).toEqual('cookies');
  });

  /* ========== retrieve an item ========== */
  
  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  it('should retrieve an item from the db', async () => {
    const response = await mockRequest.get('/snack/1');
    expect(response.status).toBe(200);
    // expect(response.body).toBe(true);
    console.log(response.body);
  });

  /* ========== retrieve all items ========== */

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  it('should retrieve all items from the db', async () => {
    const response = await mockRequest.get('/snack');
    expect(response.status).toBe(200);
  });

  /* ========== update an item ========== */

  it('should update an item in the db', async () => {
    const response = await mockRequest.put('/food/1').send({ name: 'sushi'})
    expect(response.status).toBe(200);
    expect(response.body.record.name).toEqual('sushi');
  });

  it('should update an item', async () => {
    const response = await mockRequest.put('/snack/1').send({ name: 'chips'})
    expect(response.status).toBe(200);
    expect(response.body.record.name).toEqual('chips');
  });

  /* ========== delete an item ========== */

  it('should delete an item in the db', async () => {
    const response = await mockRequest.delete('/food/1')
    expect(response.status).toBe(200);
  });

  it('should delete an item in the db', async () => {
    const response = await mockRequest.delete('/snack/1')
    expect(response.status).toBe(200);
  });

  /* ========== 404 bad route ========== */

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/no-thing').then(data => {
      expect(data.status).toBe(404);
    });
  });

  /* ========== 404 bad method ========== */

  it('should respond with a 404 on not found', async () => {
    return mockRequest.get('/').then(data => {
      expect(data.status).toBe(404);
    });
  });

})