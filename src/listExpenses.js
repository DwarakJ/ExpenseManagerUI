import React from "react";
import DeleteExpense from "./deleteExpense.js";

export default function ResultList(props) {
    if (props.spend) {
        const expense = props.spend
        return (
            <center>
            <table>
            <tbody>
                <tr><th>ID</th><th>Item</th><th>Category</th><th>Date</th></tr>
                {expense.map(e => (

                    <tr key={e.id}>
                    <td><h3>{e.id}</h3></td>
                    <td><h3>{e.item}</h3></td>
                    <td><h3>{e.category}</h3></td>
                    <td><h3>{e.date}</h3></td>
                    <td><DeleteExpense currId={e.id} getExpense={props.getExpense} /></td>
                    </tr>

        ))}
        </tbody>
        </table>
        </center>
        )
    }
    else {
        return "No data for this user"
    }
}