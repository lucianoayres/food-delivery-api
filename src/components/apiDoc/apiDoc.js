export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'Delivery API description',
    version: '1.0.0',
    title: 'Delivery API description'
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'order',
      description: 'Order management'
    }
  ],
  paths: {
    '/api/order': {
      get: {
        tags: ['order'],
        summary: 'Get order description',
        description: 'Get order description',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/Account'
              }
            }
          },
          400: {
            description: 'Error occurred'
          }
        }
      },
      post: {
        tags: ['order'],
        summary: 'Create a new order',
        description: 'Create a new order with the received parameters',
        consumes: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Order object',
            required: true,
            schema: {
              $ref: '#/definitions/Order'
            }
          },
          {
            in: 'body',
            name: 'body',
            description: 'Order object',
            required: true,
            schema: {
              $ref: '#/definitions/Order'
            }
          }
        ],
        responses: {
          200: {
            description: 'Account created'
          },
          400: {
            description: 'Error occurred'
          }
        }
      }
    }
  },
  definitions: {
    Order: {
      type: 'object',
      properties: {
        cliente: {
          type: 'string',
          example: 'João Silva'
        },
        produto: {
          type: 'string',
          example: 'Pizza Atum'
        },
        valor: {
          type: 'float',
          example: 32.5
        },
        entregue: {
          type: 'boolean',
          example: false
        }
      }
    }
  }
}
