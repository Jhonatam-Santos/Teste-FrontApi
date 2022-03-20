import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

const Input = ({ name, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current, 
            path: 'value'   
        });
    }, [fieldName, registerField]);

    return (
        <div>
            <input ref={ inputRef } defaultValue={defaultValue} { ...rest } />
            <br />
            { error && <span style={{color: '#f00'}}>{error}</span> }
        </div>
    )
};

export default Input;