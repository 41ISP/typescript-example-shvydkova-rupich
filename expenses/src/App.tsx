import { useEffect, useState, type FormEvent } from 'react'
import './App.css'
import { Form, initialFormData, type IFormData, type TCategory } from './components/Form'
import { ExpenseCard } from './components/ExpenseCard'

export interface IExpense {
  id: number,
  name: string,
  category: TCategory,
  amount: number
}


export function App() {
  const [expenses, setExpenses] = useState<IExpense[]>(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })
  const [total, setTotal] = useState(0)
  const [formData, setFormData] = useState<IFormData>(initialFormData)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.category === "" || formData.name.trim() === "" || formData.amount === 0) return
    const newExpense = {
      ...formData,
      id: Date.now()
    }
    setExpenses((old) => [...old, newExpense])
    setFormData(initialFormData)
  }

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
    setTotal(expenses.reduce(
      (acc, el) => +acc + +el.amount,
      0
    ))
  },
    [expenses])


  const handleDelete = (id: number) => {
    setExpenses(old => old.filter(el => id !== el.id))
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <div className="total">Total: ${Math.round(total)}</div>
      {expenses.map((el, i) => <ExpenseCard key={i} handleDelete={handleDelete} {...el} />)}
    </div>
  )
}

