import { useEffect, useState } from 'react'
import './App.css'
import { Form, type IFormData, type TCategory } from './components/Form'
import { ExpenseCard } from './components/ExpenseCard'

export interface IExpense {
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

export function App() {
  const [expenses, setExpenses] = useState<IExpense[]>(initialExpenses)
  const [total, setTotal] = useState(0)
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    amount: 0,
    category: ""
  })

  useEffect(() => {
    setTotal(expenses.reduce(
      (acc, el) => acc + el.amount,
      0
    ))
  },
    [expenses])

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Form formData={formData} setFormData={setFormData} />
      <div className="total">Total: ${Math.round(total)}</div>
      {expenses.map((el) => <ExpenseCard {...el} />)}
    </div>
  )
}

