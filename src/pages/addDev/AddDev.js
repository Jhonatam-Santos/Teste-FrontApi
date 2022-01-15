import React from 'react';
import { Form } from '@unform/web';
import Navbar from '../element/Navbar';
import Input from '../element/Input';

const AddDev = () => {
    function handleSubmit(data) {
        console.log(data);
    }


    return (
        <div className="addDev-container">
            <Navbar/>
            <h1>Registrar Developer</h1>
            <Form onSubmit={handleSubmit}>
                <Input name="email" />
                <Input name="name" />

                <button type="submit">Enviar</button>
            </Form>
        </div>
    )
};

export default AddDev;