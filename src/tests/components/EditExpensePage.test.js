import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses'

let editExpense,removeExpense,wrapper,history

beforeEach(()=> {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push : jest.fn()}
    wrapper = shallow(<EditExpensePage history ={history} editExpense={editExpense} removeExpense={removeExpense} expense = {expenses[1]} />)
})


test('should render EditExpensePage correctly',()=> {
    expect(wrapper).toMatchSnapshot();
})

test('should handle edit expenses',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id,expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')

})

test('should handle remove expenses',()=> {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({id:expenses[1].id});
    expect(history.push).toHaveBeenLastCalledWith('/')
})