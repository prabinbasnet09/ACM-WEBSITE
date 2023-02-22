import React from 'react';
import { useState } from 'react';

export default function FormInput(props) {
    const [focused, setFocused] = useState(false);
    const{ label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    }

    return (
        <div className="form_input_container">
            <label>{label}</label>
            <input 
                {...inputProps}
                onChange={onChange}
                onBlur={handleFocus}
                // onFocus={() => 
                //     inputProps.email === "@" && setFocused(true)
                // }
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}