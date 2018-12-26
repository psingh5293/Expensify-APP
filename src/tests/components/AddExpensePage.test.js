import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'
let onSubmit,history,wrapper

beforeEach(()=> {
    onSubmit = jest.fn();
    history = { push : jest.fn()};
    wrapper = shallow(<AddExpensePage history={history} onSubmit={onSubmit} />)
})

test('should render AddExpensePage correctly',()=> {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onsubmit',()=> {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1])
})