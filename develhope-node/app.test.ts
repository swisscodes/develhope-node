import supertest from 'supertest';

import createApp from './app';

const app = createApp();

const request = supertest(app);

test('GET /', async () => {
  const response = await request
    .get('/')
    .expect(200)
    .expect('Content-Type', 'application/json');

  expect(response.body).toEqual({ location: 'Earth' });
});
