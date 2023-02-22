import React from "react";
import { useState } from 'react';
import FormInput from './formInput';
import { useRef } from "react";

export default function SignUp(){
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        classification: "",
        email: "",
    });

    const formRef = useRef(null);

    const inputs = [
        {
            id: 1,
            firstName: "firstName",
            type: "text",
            placeholder: "First Name",
            errorMessage: "First Name should not be empty",
            label: "First Name",
            required: true,
        },
        {
            id: 2,
            lastName: "lastName",
            type: "text",
            placeholder: "Last Name",
            errorMessage: "Last Name should not be empty",
            label: "Last Name",
            required: true,

        },
        {
            id: 3,
            email: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Please enter your valid school email address ending in @warhawks.ulm.edu",
            label: "Email",
            required: true
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        // formRef.current.reset();

        // reset values
        setValues({
            firstName: "",
            lastName: "",
            classification: "",
            email: "",
        });
        
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value});
    };

    return (
        <div className = "form_container">
            <form onSubmit={handleSubmit} ref={formRef}>
                <h1>Register</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button type="submit">Submit</button>
            </form>
            <div>
            </div>
        </div>
    );
}