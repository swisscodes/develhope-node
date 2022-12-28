import supertest from 'supertest';

import createApp from './app';

const app = createApp();

const request = supertest(app);

test('GET /', async () => {
  const response = await request
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=utf-8');

  expect(response.text).toEqual(
    '<!DOCTYPE html><html><body><h1>Welcome to the World Wide Web!</h1></body></html>'
  );
});
