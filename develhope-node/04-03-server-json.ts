import { createServer } from 'node:http';
import data from './04-03-json-example.json';

const server = createServer((request, response) => {
  console.log('request received');

  response.statusCode = 200;

  response.setHeader('Content-Type', 'application/json');

  const jsonResponseBody = JSON.stringify(data);

  response.end(jsonResponseBody);
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000`);
});
