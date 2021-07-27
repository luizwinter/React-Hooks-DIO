import { rest } from 'msw';
import {setupServer} from 'msw/node';

import {getQuote} from './quoteServices';

const response = { test: 'testing'};

const server = setupServer(
    rest.get(process.env.REAC_APP_API, (req, res, ctx) =>{
        return res(ctx.json(response))
    })
);

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());

test('transform jason response into objetct', async ()=>{
    const quote = await getQuote();

    expect(quote).toStrictEqual(response);
});