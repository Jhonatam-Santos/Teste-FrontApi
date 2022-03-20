import React, { useRef, useState } from 'react';
import {  useParams } from 'react-router-dom';
import api from '../../services/api';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import Input from '../element/Input';

const UpdateRepo = () => {
    const { id, repo_id } = useParams();

    const formRef = useRef(null);

    const [repo_name, setRepoName] = useState('');
    const [text, setText] = useState('');

    const [repo_stars, setRepoStars] = useState('');

    async function handleSubmit( data ) {
        const dataUpdate = { ...data, repo_id, id};

        console.log(dataUpdate);
    }

    return (
        <div className="all-container">
            <div className="addDev-container">
                <h1 className="title">Update Repo</h1>
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

                    <button type='submit'>send</button>
                </Form>
            </div>
        </div>
    )
};

export default UpdateRepo;