import { useEffect, type ChangeEvent, type Dispatch, type FormEvent, type SetStateAction } from "react"
import type { IExpense } from "../App"

export type TCategory = "food" | "transport" | "fun" | ""

export interface IFormData extends Omit<IExpense, "id"> { }

interface IFormProps {
    formData: IFormData,
    setFormData: Dispatch<SetStateAction<IFormData>>,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}
const categoriesButtons = [
    [
        "", "Select category"
    ],
    [
        "food", "Food"
    ],
    [
        "transport", "Transport"
    ],
    [
        "fun", "Fun"
    ]
]
export const Form = ({ formData, setFormData, handleSubmit }: IFormProps) => {
    const handleFormChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target
        setFormData((old) => ({ ...old, [name]: value }))
    }

    useEffect(() => { console.log(formData) }, [formData])
    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleFormChange} type="text" placeholder="Expense title" name="name" value={formData.name} />
            <input onChange={handleFormChange} type="number" placeholder="Amount" name="amount" value={formData.amount} />
            <select onChange={handleFormChange} name="category" value={formData.category}>
             {categoriesButtons.map((el) => <option value={el[0]}>{el[1]}</option>)}
            </select>
            <button>Add Expense</button>
        </form>
    )
}