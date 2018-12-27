


export default (expenses)=> {
 return  expenses.map(expense => {
     return expense.amount
 }).reduce((sum,el)=>{
     return sum + el;
 },0)
}