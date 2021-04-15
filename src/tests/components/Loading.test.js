import React from 'react';
import renderer from 'react-test-renderer';
import Loading from '../../components/Loading';

it('Renders Loading', () => {
  const popular = renderer
    .create(
      <Loading />,
    )
    .toJSON();

  expect(popular).toMatchSnapshot();
});
