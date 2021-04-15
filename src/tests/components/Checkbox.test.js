import React from 'react';
import renderer from 'react-test-renderer';
import Checkbox from '../../components/Checkbox';

it('Renders Checkbox', () => {
  const popular = renderer
    .create(
      <Checkbox checked={() => true} handleChange={() => ''} id={1} name="action" />,
    )
    .toJSON();

  expect(popular).toMatchSnapshot();
});
