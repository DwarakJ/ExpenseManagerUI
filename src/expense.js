import axios from "axios";
import React from "react";
import Category from './category.js';
import ResultList from './listExpenses.js';

const baseURL = "http://127.0.0.1:5000/";

export default function Expense() {
    const [expense, setExpense] = React.useState(null);

    const [newSpend, setNewSpend] = React.useState({
        item: "",
        amount: "",
        paid_to: "",
        category: "",
        description: ""
    });

    React.useEffect(() => {
        getExpense()
    }, [newSpend]);

    function getExpense() {
        axios.get(baseURL).then((response) => {
            setExpense(response.data);
        });
    }


    function addNewExpense(e) {
        axios
            .post(`${baseURL}expense`, JSON.stringify(
                {
                    "item": newSpend.item,
                    "amount": newSpend.amount,
                    "paid_to": newSpend.paid_to,
                    "category": newSpend.category,
                    "description": newSpend.description
                })
                , {
                    "headers": {
                        "content-type": "application/json",
                    },
                })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });

        getExpense();
        resetSpendState();
        e.preventDefault();
    }

    function handleChange(e) {
        const value = e.target.value;
        setNewSpend({
            ...newSpend,
            [e.target.name]: value
        });
        e.preventDefault();
    }

    function resetSpendState() {
        setNewSpend({
            item: "",
            amount: "",
            paid_to: "",
            category: "",
            description: ""
        })
    }

    return (
        <div>
            <form onSubmit={addNewExpense}>
                <center>
                <table>
                    <tbody>
                    <tr>
                    <td><label>Item Name<input name="item" type="text" placeholder="ItemName" onChange={handleChange} value={newSpend.item} /></label> </td>
                    <td><label>Amount<input name="amount" type="text" placeholder="Price" onChange={handleChange} value={newSpend.amount} /></label></td>
                    <td><label>Paid to<input name="paid_to" type="text" placeholder="Whom you paid" onChange={handleChange} value={newSpend.paid_to} /></label></td>
                    <td><label>Category</label></td><td> <Category setdata={handleChange} /></td>
                    <td><label>Description<input name="description" type="text" placeholder="Description" onChange={handleChange} value={newSpend.description} /></label></td>
                    <td><button type="submit">Add Expense</button></td>
                    </tr>
                    </tbody>
                    
                </table>
                </center>
            </form>
            <ResultList spend={expense} getExpense={getExpense} />
        </div>
    );
}