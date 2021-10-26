import { app } from './app.js'

const PORT = process.env.PORT || 3000

// start server
const server = app.listen(PORT, async () => {
  const startMessage = 'Delivery API Started'
  console.log(startMessage)
  // automatically set to 'development' if 'process.env.NODE_ENV' is not set
  // PS: Set enviroment variable '$NODE_ENV' to 'production' on the deploy version
  if (app.get('env') === 'production') logger.info(startMessage)
})

server.on('listening', () => {
  console.log(`Listening on port: ${PORT}`)
})

server.on('connection', (con) => {
  //logger.info(`New Connection: ${con.localAddress}:${con.localPort}`);
  console.log('new connection')
})

server.on('close', () => {
  console.log('server close')
})

server.on('error', (err) => {
  logger.error(`${err.code}: ${err.message}`)
})
