import React from 'react';
import renderer from 'react-test-renderer';
import Field from './Field';

jest.mock('../Widgets/ArrayWidget', () =>
  jest.fn(() => <div className="ArrayWidget" />),
);
jest.mock('../Widgets/CheckboxWidget', () =>
  jest.fn(() => <div className="CheckboxWidget" />),
);
jest.mock('../Widgets/PasswordWidget', () =>
  jest.fn(() => <div className="PasswordWidget" />),
);
jest.mock('../Widgets/SelectWidget', () =>
  jest.fn(() => <div className="SelectWidget" />),
);
jest.mock('../Widgets/TextWidget', () =>
  jest.fn(() => <div className="TextWidget" />),
);
jest.mock('../Widgets/TextareaWidget', () =>
  jest.fn(() => <div className="TextareaWidget" />),
);
jest.mock('../Widgets/DatetimeWidget', () =>
  jest.fn(() => <div className="DatetimeWidget" />),
);
jest.mock('../Widgets/WysiwygWidget', () =>
  jest.fn(() => <div className="WysiwygWidget" />),
);

describe('Field', () => {
  it('renders a richtext field', () => {
    const component = renderer.create(<Field widget="richtext" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a textarea field', () => {
    const component = renderer.create(<Field widget="textarea" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a datetime field', () => {
    const component = renderer.create(<Field widget="datetime" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a password field', () => {
    const component = renderer.create(<Field widget="password" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a text field', () => {
    const component = renderer.create(<Field widget="text" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a select field', () => {
    const component = renderer.create(<Field choices={[]} />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a boolean field', () => {
    const component = renderer.create(<Field type="boolean" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a array field', () => {
    const component = renderer.create(<Field type="array" />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

  it('renders a fallback field', () => {
    const component = renderer.create(<Field />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
