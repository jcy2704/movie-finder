import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Upcoming from '../../containers/Upcoming';

const configureMockStore = configureStore();

const initialState = {
  movies: [
    {
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [
        28,
        878,
      ],
      id: 399566,
      overview: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      title: 'Godzilla vs. Kong',
      vote_average: 8.4,
    },
    {
      backdrop_path: '/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg',
      genre_ids: [
        28,
        878,
      ],
      id: 399566,
      overview: 'In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.',
      poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
      title: 'Godzilla vs. Kong',
      vote_average: 8.4,
    },
  ],
  filter: [28],
};

const store = configureMockStore(initialState);

it('Renders Popular Movies', () => {
  const popular = renderer
    .create(
      <Provider store={store}>
        <Upcoming />
      </Provider>,
    )
    .toJSON();

  expect(popular).toMatchSnapshot();
});

describe('Popular movies details', () => {
  beforeEach(() => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <Router history={history}>
          <Upcoming />
        </Router>
      </Provider>,
    );
  });

  it('loading', () => {
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
