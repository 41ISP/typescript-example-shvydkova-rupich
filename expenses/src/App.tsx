import { useState } from 'react'
import './App.css'
import { Form, type TCategory } from './components/Form'
import { ExpenseCard } from './components/ExpenseCard'

interface IExpense {
  id: number,
  name: string,
  category: TCategory,
  amount: number
}
const initialExpenses: IExpense[] = [
  {
    id: Date.now(),
    name: "KFC",
    category: "food",
    amount: 15
  },
  {
    id: Date.now() + 1,
    name: "Netflix",
    category: "fun",
    amount: 19.99
  }

]
function App() {
  const [expenses, setExpenses] = useState<IExpense[]>(initialExpenses)

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Form />
      <div className="total">Total: $42.50</div>
      {expenses.map((el) => <ExpenseCard />)}
    </div>
  )
}

export default App
