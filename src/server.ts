import { app } from './app';
//TODO import env vars

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running')
})