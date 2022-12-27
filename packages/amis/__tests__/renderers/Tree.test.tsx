import {
  act,
  cleanup,
  fireEvent,
  render,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react';
import {clearStoresCache, render as amisRender} from '../../src';
import {makeEnv, wait} from '../helper';

afterEach(() => {
  cleanup();
  clearStoresCache();
  jest.useRealTimers();
});

test('Tree: basic & disabled children & default check children', () => {
  const {container, getByText} = render(
    amisRender(
      {
        type: 'page',
        body: {
          type: 'form',
          api: '/api/mock2/form/saveForm',
          body: [
            {
              type: 'input-tree',
              name: 'tree',
              label: 'Tree',
              options: [
                {
                  label: 'Folder A',
                  value: 1,
                  children: [
                    {
                      label: 'file A',
                      value: 2
                    },
                    {
                      label: 'Folder B',
                      value: 3,
                      children: [
                        {
                          label: 'file b1',
                          value: 3.1
                        },
                        {
                          label: 'file b2',
                          value: 3.2
                        }
                      ]
                    }
                  ]
                },
                {
                  label: 'file C',
                  value: 4
                },
                {
                  label: 'file D',
                  value: 5
                }
              ]
            }
          ]
        }
      },
      {},
      makeEnv({})
    )
  );

  expect(container).toMatchSnapshot();
});

test('Tree: showOutline', () => {
  const {container, getByText} = render(
    amisRender(
      {
        type: 'page',
        body: {
          type: 'form',
          api: '/api/mock2/form/saveForm',
          body: [
            {
              type: 'input-tree',
              name: 'tree',
              label: 'Tree',
              showOutline: true,
              options: [
                {
                  label: 'Folder A',
                  value: 1,
                  children: [
                    {
                      label: 'file A',
                      value: 2
                    },
                    {
                      label: 'Folder B',
                      value: 3,
                      children: [
                        {
                          label: 'file b1',
                          value: 3.1
                        },
                        {
                          label: 'file b2',
                          value: 3.2
                        }
                      ]
                    }
                  ]
                },
                {
                  label: 'file C',
                  value: 4
                },
                {
                  label: 'file D',
                  value: 5
                }
              ]
            }
          ]
        }
      },
      {},
      makeEnv({})
    )
  );

  expect(container).toMatchSnapshot();
});

test('Tree: autoCheckChildren = false', async () => {
  const {container, getByText} = render(
    amisRender(
      {
        type: 'page',
        body: {
          type: 'form',
          api: '/api/mock2/form/saveForm',
          body: [
            {
              type: 'input-tree',
              name: 'tree',
              label: 'Tree',
              autoCheckChildren: false,
              multiple: true,
              options: [
                {
                  label: 'Folder A',
                  value: 1,
                  children: [
                    {
                      label: 'file A',
                      value: 2
                    },
                    {
                      label: 'Folder B',
                      value: 3,
                      children: [
                        {
                          label: 'file b1',
                          value: 3.1
                        },
                        {
                          label: 'file b2',
                          value: 3.2
                        }
                      ]
                    }
                  ]
                },
                {
                  label: 'file C',
                  value: 4
                },
                {
                  label: 'file D',
                  value: 5
                }
              ]
            }
          ]
        }
      },
      {},
      makeEnv({})
    )
  );

  fireEvent.click(getByText('Folder B'));

  await waitFor(() => container.querySelector('.is-checked'));

  expect(container.querySelectorAll('.is-checked').length).toBe(1);
});

test('Tree: cascade = true', () => {
  const {container, getByText} = render(
    amisRender(
      {
        type: 'input-tree',
        name: 'tree2',
        label: '子节点可以反选，值包含父子节点值',
        multiple: true,
        cascade: true,
        options: [
          {
            label: 'A',
            value: 'a'
          },
          {
            label: 'B',
            value: 'b',
            children: [
              {
                label: 'B-1',
                value: 'b-1'
              },
              {
                label: 'B-2',
                value: 'b-2'
              },
              {
                label: 'B-3',
                value: 'b-3'
              }
            ]
          },
          {
            label: 'C',
            value: 'c'
          }
        ]
      },
      {},
      makeEnv({})
    )
  );

  fireEvent.click(getByText('B'));

  expect(container.querySelectorAll('.is-checked').length).toBe(4);
});

test('Tree source', async () => {
  const fetcher = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      status: 0,
      msg: 'ok',
      data: {
        options: [
          {label: 'Option A', value: 'a'},
          {label: 'Option B', value: 'b'},
          {label: 'Option C', value: 'c'},
          {label: 'Option D', value: 'd'},
          {label: 'Option E', value: 'e'},
          {label: 'Option F', value: 'f'},
          {label: 'Option G', value: 'g'},
          {label: 'Option H', value: 'h'},
          {label: 'Option I', value: 'i'},
          {label: 'Option J', value: 'j'},
          {label: 'Option K', value: 'k'},
          {label: 'Option L', value: 'l'},
          {label: 'Option M', value: 'm'},
          {label: 'Option N', value: 'n'},
          {label: 'Option O', value: 'o'},
          {label: 'Option P', value: 'p'},
          {label: 'Option Q', value: 'q'}
        ]
      }
    });
  });

  const {getByText} = render(
    amisRender(
      {
        type: 'input-tree',
        name: 'tree',
        label: 'Tree',
        source: '/api'
      },
      {},
      makeEnv({fetcher})
    )
  );

  await waitFor(() => getByText('Option A'));
});
