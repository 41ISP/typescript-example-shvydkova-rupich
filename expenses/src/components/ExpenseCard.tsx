import type { IExpense } from "../App"
interface IExpenseCardProps extends IExpense {
    handleDelete: (id: number) => void
}
export const ExpenseCard = ({ id, name, amount, category, handleDelete}: IExpenseCardProps) => {
    return (
        <div className="expense">
            <div>
                {name}
                <div className="category">{category}</div>
            </div>
            <div className="amount">${amount}</div>
            <div onClick={() => handleDelete(id)}>x</div>
        </div>
    )
}