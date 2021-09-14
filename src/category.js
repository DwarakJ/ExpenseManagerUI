import axios from "axios";
import React from "react";

const baseURL = "http://127.0.0.1:5000/category";

export default function Category(props){
    const [category, setCategory] = React.useState(null)

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCategory(response.data);
        });
    },[])

    var passSelectResponse = (e) =>{
        props.setdata(e);
    }

    return (
        <div>
            <select name="category" onChange={passSelectResponse}>
            {
            category? (
                category.map(c => {
                    return <option key={c.id} value={c.name}>{c.name}</option>
                })) : 
                (
                    <option value="NoCategory">No Category</option>
                )
            }
            </select>
        </div>
    )
}