import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen }  from '@testing-library/react';
import App from './App';

const response= {speaker: 'Speaker', quote: 'test quote'};

const server = setupServer(
    rest.get(process.env.REAC_APP_API, (req, res, ctx) =>{
        return res(ctx.json(response))
    })
);

beforeAll(()=> server.listen());
afterEach(()=> server.resetHandlers());
afterAll(()=> server.close());

test('render the app with a button, a quote aind a button', ()=>{
    render(<App />);

    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole('img');
    const textEl = screen.findByText(/Speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});

test('calls api on button click and update its text ', () =>{
    render(<App/>);

    const buttonEl = screen.getByRole('button');

});