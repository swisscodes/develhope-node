import { createServer } from 'node:http';

const server = () =>
  //@ts-ignore
  createServer((request, response) => {
    console.log('request to my only route / is succesful');
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    response.end(
      '<!DOCTYPE html><html><body><h1>Welcome to the World Wide Web!</h1></body></html>'
    );
  });

export default server;
