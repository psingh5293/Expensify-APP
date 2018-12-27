import React from 'react';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';

import expenses from '../fixtures/expenses'
import {filters} from '../fixtures/filters'
console.log(filters)
test('should render expenseSummary with one  expense',()=> {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={123} />)
    expect(wrapper).toMatchSnapshot();
})

