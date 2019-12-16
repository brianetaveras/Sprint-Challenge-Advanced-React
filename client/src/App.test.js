import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/react';
import App from './App'
import PlayerList from './components/PlayerList'

afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div')
     render(<App/>, div);
});

it('renders title', ()=>{
  const title = render(<App/>);
  const hasTitle = title.queryByText(/Women's World Cup/i);
})

