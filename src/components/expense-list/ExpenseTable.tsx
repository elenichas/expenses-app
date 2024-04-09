import { FC } from 'react'
import { Expense } from "../../types";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button"
import "./ExpenseTabel.css";

interface ExpenseTableProps {
    expenses: Expense[];
}

const ExpenseTable: FC<ExpenseTableProps> = ({ expenses }) => {
    return (
        <Table striped bordered hover responsive className="styled-table">
            <thead>
                <tr>
                    <th className='heading'>#</th>
                    <th className='heading'>Expense Type</th>
                    <th className='heading'>Expense Date</th>
                    <th className='heading'>Expense Ammount</th>
                    <th className='heading'>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense, index) => {
                        return (
                            <tr>
                                <td className='heading'>{index + 1}</td>
                                <td className='heading'>{expense.expense_type}</td>
                                <td className='heading'>{expense.expense_date}</td>
                                <td className='heading'>{expense.expense_amount}</td>
                                <td className='heading'>{expense.description}</td>
                                <td>
                                    <Button variant="info" size="sm">Edit</Button>
                                </td>
                                 <td>
                                    <Button variant="danger"  size="sm">Delete</Button>
                                </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </Table>
    )
}

export default ExpenseTable;