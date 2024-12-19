"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-Commerce API',
            version: '1.0.0',
            description: 'A comprehensive e-commerce API with product, order, cart, and payment functionalities',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Local development server',
            },
        ],
        components: {
            schemas: {
                Product: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                        price: { type: 'integer' },
                        stock: { type: 'integer' },
                        categoryId: { type: 'string' },
                        brandId: { type: 'string' },
                    },
                },
                Category: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                    },
                },
                Cart: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        userId: { type: 'string' },
                        productId: { type: 'integer' },
                        quantity: { type: 'integer' },
                    },
                },
                Order: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        userId: { type: 'string' },
                        totalAmount: { type: 'integer' },
                        status: { type: 'string' },
                    },
                },
                Review: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        userId: { type: 'string' },
                        productId: { type: 'integer' },
                        rating: { type: 'integer' },
                        comment: { type: 'string' },
                    },
                },
                Payment: {
                    type: 'object',
                    properties: {
                        id: { type: 'string' },
                        orderId: { type: 'string' },
                        paymentMethodId: { type: 'string' },
                        status: { type: 'string' },
                        amount: { type: 'integer' },
                    },
                },
            },
        },
        paths: {
            '/products': {
                get: {
                    summary: 'Get all products',
                    tags: ['Products'],
                    responses: {
                        '200': {
                            description: 'List of products',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Product' },
                                    },
                                },
                            },
                        },
                    },
                },
                post: {
                    summary: 'Create a new product',
                    tags: ['Products'],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Product' },
                            },
                        },
                    },
                    responses: {
                        '201': {
                            description: 'Product created successfully',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Product' },
                                },
                            },
                        },
                    },
                },
            },
            '/categories': {
                get: {
                    summary: 'Get all categories',
                    tags: ['Categories'],
                    responses: {
                        '200': {
                            description: 'List of categories',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Category' },
                                    },
                                },
                            },
                        },
                    },
                },
                post: {
                    summary: 'Create a new category',
                    tags: ['Categories'],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Category' },
                            },
                        },
                    },
                    responses: {
                        '201': {
                            description: 'Category created successfully',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Category' },
                                },
                            },
                        },
                    },
                },
            },
            '/cart': {
                get: {
                    summary: 'Get cart items for a user',
                    tags: ['Cart'],
                    parameters: [
                        {
                            name: 'userId',
                            in: 'query',
                            required: true,
                            schema: { type: 'string' },
                        },
                    ],
                    responses: {
                        '200': {
                            description: 'List of cart items',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Cart' },
                                    },
                                },
                            },
                        },
                    },
                },
                post: {
                    summary: 'Add item to cart',
                    tags: ['Cart'],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'object',
                                    properties: {
                                        userId: { type: 'string' },
                                        productId: { type: 'integer' },
                                        quantity: { type: 'integer' },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        '201': {
                            description: 'Item added to cart successfully',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Cart' },
                                },
                            },
                        },
                    },
                },
            },
            '/orders': {
                get: {
                    summary: 'Get all orders',
                    tags: ['Orders'],
                    responses: {
                        '200': {
                            description: 'List of orders',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Order' },
                                    },
                                },
                            },
                        },
                    },
                },
                post: {
                    summary: 'Create a new order',
                    tags: ['Orders'],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Order' },
                            },
                        },
                    },
                    responses: {
                        '201': {
                            description: 'Order created successfully',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Order' },
                                },
                            },
                        },
                    },
                },
            },
            '/reviews': {
                get: {
                    summary: 'Get reviews for a product',
                    tags: ['Reviews'],
                    parameters: [
                        {
                            name: 'productId',
                            in: 'query',
                            required: true,
                            schema: { type: 'integer' },
                        },
                    ],
                    responses: {
                        '200': {
                            description: 'List of reviews for a product',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Review' },
                                    },
                                },
                            },
                        },
                    },
                },
                post: {
                    summary: 'Create a new review',
                    tags: ['Reviews'],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Review' },
                            },
                        },
                    },
                    responses: {
                        '201': {
                            description: 'Review created successfully',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Review' },
                                },
                            },
                        },
                    },
                },
            },
            '/payments': {
                get: {
                    summary: 'Get all payments',
                    tags: ['Payments'],
                    responses: {
                        '200': {
                            description: 'List of payments',
                            content: {
                                'application/json': {
                                    schema: {
                                        type: 'array',
                                        items: { $ref: '#/components/schemas/Payment' },
                                    },
                                },
                            },
                        },
                    },
                },
                post: {
                    summary: 'Create a new payment',
                    tags: ['Payments'],
                    requestBody: {
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Payment' },
                            },
                        },
                    },
                    responses: {
                        '201': {
                            description: 'Payment created successfully',
                            content: {
                                'application/json': {
                                    schema: { $ref: '#/components/schemas/Payment' },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    apis: ['./src/routes/*.ts'], // Path to the API routes
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
