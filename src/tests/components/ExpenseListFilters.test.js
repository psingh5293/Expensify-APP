import React from 'react';
import { shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters,altFilters} from '../fixtures/filters';
import moment from 'moment'

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper

beforeEach(()=> {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper =shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter ={setTextFilter}
        sortByDate ={sortByDate}
        sortByAmount ={sortByAmount}
        setStartDate ={setStartDate}
        setEndDate ={setEndDate}
        />)
})

test('should render expenselistfilters correctly',()=> {
    expect(wrapper).toMatchSnapshot();
})

test('should render expenselist filters with data correctly',()=> {
    wrapper.setProps ({
        filters:{altFilters}
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text changes',()=> {
    wrapper.setProps ({
        filters:{altFilters}
    })
    const value=filters.text;
    wrapper.find('input').simulate('change',{
        target:{value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('sort by date',()=> {
    wrapper.setProps ({
        filters:{altFilters}
    }) 
const value = 'date';
wrapper.find('select').simulate('change',{
    target:{value}
})
expect(sortByDate).toHaveBeenLastCalledWith()
})

test('sort by amount',()=> { 
const value = 'amount';
wrapper.find('select').simulate('change',{
    target:{value}
})
expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('should handle date changes',()=> {
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})

test('should handle focus changes',()=> {
    const calenderFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calendarFocused')).toBe(calenderFocused)
})