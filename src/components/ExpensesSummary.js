import React from 'react';
import { connect } from 'react-redux';
import totalExpenses from '../selectors/expenses-total';
import expenses from '../selectors/expenses'
import numeral from 'numeral'


export class ExpensesSummary extends React.Component{


    render(){
        const expenseWord = this.props.expensesCount===1 ? 'expense' :'expenses';
        const formattedTotal = numeral(this.props.expensesTotal/100).format('$0,0.00')
        return(
            <div>
          <p> {`viewing ${this.props.expensesCount} ${expenseWord} totalling ${formattedTotal}`}</p>
            </div>
        );
    }

};

const mapStateToProps =(state)=> {
    const visibleExpenses = expenses(state.expenses,state.filters)
    return {
        expensesCount : visibleExpenses.length,
        expensesTotal : totalExpenses(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)