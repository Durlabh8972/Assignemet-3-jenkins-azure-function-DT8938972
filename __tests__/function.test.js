
const request = require('supertest');
const http = require('http');

const handler = require('../index');

describe('Azure Function Tests', () => {
    it('should return 200 status code', async () => {
        const context = { res: {} };
        await handler(context, {});
        expect(context.res.status).toBe(200);
        expect(context.res.body).toBe("Hello, World!");
    });

    it('should return Hello, World!', async () => {
        const context = { res: {} };
        await handler(context, {});
        expect(context.res.body).toEqual("Hello, World!");
    });

    it('should have response object', async () => {
        const context = { res: {} };
        await handler(context, {});
        expect(context.res).toHaveProperty('status');
        expect(context.res).toHaveProperty('body');
    });
});
