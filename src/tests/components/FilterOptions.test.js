import React from 'react';
import renderer from 'react-test-renderer';
import FilterOptions from '../../components/FilterOptions';

it('Renders Filter Options', () => {
  const popular = renderer
    .create(
      <FilterOptions handleChange={() => 'a'} isChecked={() => true} />,
    )
    .toJSON();

  expect(popular).toMatchSnapshot();
});
