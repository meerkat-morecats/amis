import React = require('react');
import {render, fireEvent, waitFor} from '@testing-library/react';
import '../../../src';
import {render as amisRender} from '../../../src';
import {makeEnv, wait} from '../../helper';

test('Renderer:city', async () => {
  const {container, getByText, findByText} = render(
    amisRender(
      {
        type: 'form',
        api: '/api/xxx',
        controls: [
          {
            type: 'city',
            name: 'a',
            label: 'city',
            allowDistrict: true,
            allowCity: true,
            placeholder: '请选择'
          }
        ],
        title: 'The form',
        actions: []
      },
      {},
      makeEnv({})
    )
  );

  await waitFor(() => {
    getByText('请选择');
  });

  fireEvent.click(getByText('请选择'));
  fireEvent.mouseEnter(getByText('河北省'));
  fireEvent.mouseEnter(getByText('石家庄市'));
  fireEvent.click(getByText('长安区'));

  await wait(500);
  expect(container).toMatchSnapshot();
});
