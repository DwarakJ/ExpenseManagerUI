import React from "react";
import axios from "axios";

const baseURL = "http://127.0.0.1:5000/";

export default function DeleteExpense(props){

    function deleteItem(){
        console.log(props.currId)
        axios
        .delete(`${baseURL}expense/${props.currId}/delete`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });

        props.getExpense();
    }

    return (
        <a href="/" onClick={deleteItem}>delete</a>
    )
}