import type { Dispatch, SetStateAction } from "react"
import type { IExpense } from "../App"

export type TCategory = "food" | "transport" | "fun" | ""

export interface IFormData extends Omit<IExpense, "id"> {}

interface IFormProps {
    formData: IFormData,
    setFormData: Dispatch<SetStateAction<IFormData>>
}
export const Form = ({formData, setFormData} : IFormProps) => {
    return (
        <div className="form">
            <input type="text" placeholder="Expense title" name="name" value={formData.name} />
            <input type="number" placeholder="Amount" name="amount" value={formData.amount} />
            <select name="category" value={formData.category}>
                <option value="">Select category</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Fun</option>
            </select>
            <button>Add Expense</button>
        </div>
    )
}