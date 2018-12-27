import expenses from '../fixtures/expenses';

import ExpenseTotal from '../../selectors/expenses-total'


test('should return sumof zero element',()=> {
 const result = ExpenseTotal([]);
 expect(result).toEqual(0);
})

test('should return sum of one element',()=>{
    const result = ExpenseTotal([expenses[1]]);
    expect(result).toBe(109500)
})

test('should return sum of multiple element',()=>{
    const result = ExpenseTotal([...expenses]);
    expect(result).toBe(114195)
})