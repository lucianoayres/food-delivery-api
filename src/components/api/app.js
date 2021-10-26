import express from 'express'
import cors from 'cors'
import { logger } from '../../libraries/logger.js'
import ordersRouter from '../orders/ordersRoute.js'
import reportsRouter from '../reports/reportsRoute.js'
import apiDocRouter from '../apiDoc/apiDocRoute.js'
import httpErrorsRouter from '../httpErrors/httpErrorsRoute.js'

import path from 'path'

global.logger = logger
// json data file path
global.DATA_FILENAME = path.resolve('./src/data/pedidos.json')
console.log(DATA_FILENAME)

// setup & export express app
export const app = express()
// remove the http header identifying 'express' is being used (for security reasons)
app.disable('x-powered-by')
// enable JSON support on express
app.use(express.json())
// enable cross-origin resource sharing (CORS header ‘Access-Control-Allow-Origin’)
// makes the API available for requests form another domains
app.use(cors())
// enable static files
app.use(express.static('public'))

// add routers
app.use('/api', ordersRouter)
app.use('/api', reportsRouter)
// add router to swagger API Documentation page
app.use('/api', apiDocRouter)
// handle 404 and 500 http error
app.use(httpErrorsRouter)
