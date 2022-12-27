import { createServer } from 'node:http';

const server = () =>
  //@ts-ignore
  createServer((request, response) => {
    console.log('request to my only route / is succesful');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify({ location: 'Earth' }));
  });

export default server;
