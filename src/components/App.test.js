import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Header from './Header';
import { shallow } from 'enzyme';


let wrapped;

beforeEach(() => {
    wrapped = shallow(<Header />);
});

it ('shows a comment box', () => {
    expect(wrapped.find(Header).length).toEqual(1);
});
