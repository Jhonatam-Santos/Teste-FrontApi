import React, { useRef, useState } from 'react';
import {  useParams } from 'react-router-dom';
import api from '../../services/api';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import Navbar from '../element/Navbar';
import Input from '../element/Input';

const AddRepo = () => {
    const formRef = useRef(null);

    const [repo_name, setRepoName] = useState('');
    const [text, setText] = useState('');
    const [repo_stars, setRepoStars] = useState('');
    const { id } = useParams();
    const [dev_id] = useState(id);

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({        
                repo_name: Yup.string()
                .required('campo obrigatório'),
                text: Yup.string()
                .required('campo obrigatório'),
                repo_stars: Yup.string()
                .required('campo obrigatório'),
                dev_id:  Yup.string()
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current.setErrors({});
            
            const response = await api.post('Repo', data);
            alert(`Repositorio ${response.data.repo_name} salvo com sucesso!`);
            reset();

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                })

                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <div className="all-container">
            <div className="addDev-container">
                <h1 className="title">Add Repo</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input 
                    name="repo_name"
                    value={repo_name}
                    onChange={data => setRepoName(data.target.value)} 
                    />
                    <Input 
                    name="text"
                    value={text}
                    onChange={data => setText(data.target.value)} 
                    />
                    <Input 
                    name="repo_stars"
                    value={repo_stars}
                    type="number"
                    onChange={data => setRepoStars(data.target.value)} 
                    />

                    <Input  
                    type="hidden"
                    name="dev_id"
                    value={dev_id}
                    />
                    <button type='submit'>send</button>
                </Form>
            </div>
        </div>
    )
};

export default AddRepo;