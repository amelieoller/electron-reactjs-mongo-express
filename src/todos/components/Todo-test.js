import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';
import { expect } from 'chai';

describe('Todo', () => {
    const component = shallow(<Todo />);

    it('should render the todo element', () => {
        const ele = shallow(<Todo />);
        expect(ele.find('table')).to.have.length(1);
    });
});