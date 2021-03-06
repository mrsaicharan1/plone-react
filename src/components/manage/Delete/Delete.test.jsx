import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-intl-redux';

import Delete from './Delete';

const mockStore = configureStore();

describe('Delete', () => {
  it('renders an empty delete component', () => {
    const store = mockStore({
      content: {
        data: undefined,
        delete: {
          loading: false,
          loaded: true,
        },
      },
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <Delete location={{ pathname: '/blog', query: {} }} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a delete component', () => {
    const store = mockStore({
      content: {
        data: {
          title: 'Blog',
        },
        delete: {
          loading: false,
          loaded: true,
        },
      },
      intl: {
        locale: 'en',
        messages: {},
      },
    });
    const component = renderer.create(
      <Provider store={store}>
        <Delete location={{ pathname: '/blog', query: {} }} />
      </Provider>,
    );
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
