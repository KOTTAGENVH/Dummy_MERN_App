import React, { useEffect, useState } from "react";
import axios from "axios";

const Viewform = () => {
    const [form, setForm] = useState([]);
    
    useEffect(() => {
        const getForm = async () => {
        const res = await axios.get("http://localhost:4000/form/getForm");
        const data = await res.data;
        console.log("data",data);
        setForm(data);
        };
        getForm();
    }, []);
    
    return (
        <div>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                </tr>
            </thead>
            <tbody>
                {form.map((item) => (
                    <tr key={item._id}>
                        <td>{item.Name}</td>
                        <td>{item.Age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );
};





export default Viewform;
