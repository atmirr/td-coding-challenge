import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { users, user, errorMessage } from './mock-data';

// Define handlers to handle multiple endpoint requests
const handlers = [
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.json(users));
  }),
  rest.get('/users/1', (req, res, ctx) => {
    return res(ctx.json(user));
  }),
  rest.get('/users/20', (req, res, ctx) => {
    return res(ctx.status(404, errorMessage));
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest };
