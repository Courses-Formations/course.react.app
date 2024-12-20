import { useState } from "react";

// custom
export default function FormState() {
    function RegisterForm(e){
        e.preventDefault();
        alert(`Dados pessoais ${name} e ${email} enviados com sucesso!`);
    }
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    return (
        <div>
            <form onSubmit={RegisterForm}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name"
                    onChange={(e) => setName(e.target.value)} ></input>
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}