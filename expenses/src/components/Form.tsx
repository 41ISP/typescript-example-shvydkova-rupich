export type TCategory = "food" | "transport" | "fun" | ""

export const Form = () => {
    return (
        <div className="form">
            <input type="text" placeholder="Expense title" />
            <input type="number" placeholder="Amount" />
            <select>
                <option value="">Select category</option>
                <option>Food</option>
                <option>Transport</option>
                <option>Fun</option>
            </select>
            <button>Add Expense</button>
        </div>
    )
}