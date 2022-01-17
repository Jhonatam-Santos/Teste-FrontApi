import React, { useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import Navbar from '../element/Navbar';
import Input from '../element/Input';
import api from '../../services/api';

const AddDev = () => {
    const formRef = useRef(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [followers, setFollowers] = useState('');
    const [following, setFollowing] = useState('');
    const [stars, setStars] = useState('');
    const [organization, setOrganization] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const [link, setLink] = useState('');
    const [web, setWeb] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(data, { reset }) {
        try {
            const schema = Yup.object().shape({        
                name: Yup.string()
                .required('campo obrigatório'),
                username: Yup.string()
                .required('campo obrigatório'),
                bio: Yup.string()
                .required('campo obrigatório'),
                followers:  Yup.string()
                .required('campo obrigatório'),
                following: Yup.string()
                .required('campo obrigatório'),
                stars: Yup.string()
                .required('campo obrigatório'),
                organization: Yup.string()
                .required('campo obrigatório'),
                location: Yup.string()
                .required('campo obrigatório'),
                email: Yup.string()
                .email('digite um e-mail válido')
                .required('campo obrigatório'),
                link: Yup.string()
                .required('campo obrigatório'),
                web: Yup.string()
                .required('campo obrigatório'),
                password: Yup.string()
                .required('campo obrigatório'),
            });

            await schema.validate(data, {
                abortEarly: false,
            })

            formRef.current.setErrors({});
            
            const response = await api.post('Dev', data);
            alert(`Usuário ${response.data.username} salvo com sucesso!`);
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
            <Navbar/>
            <div className="addDev-container">
                <h1 className="title">Registrar Developer</h1>
                <Form ref={formRef} onSubmit={handleSubmit}>

                    <span className="spn-input">Nome</span>
                    <Input className="inp-form"
                    name="name"
                    value={name}
                    onChange={data => setName(data.target.value)} />

                    <span className="spn-input">Nome de usuário</span>
                    <Input className="inp-form" 
                    name="username"
                    value={username}
                    onChange={data => setUsername(data.target.value)} />

                    <span className="spn-input">Biografia</span>
                    <Input className="inp-form" 
                    name="bio" 
                    value={bio}
                    onChange={data => setBio(data.target.value)} />

                    <span className="spn-input">Seguidores</span>
                    <Input className="inp-form" 
                    type="number" 
                    name="followers" 
                    value={followers}
                    onChange={data => setFollowers(data.target.value)} />

                    <span className="spn-input">Seguindo</span>
                    <Input className="inp-form" 
                    type="number" 
                    name="following" 
                    value={following}
                    onChange={data => setFollowing(data.target.value)} />

                    <span className="spn-input">Estrelas</span>
                    <Input className="inp-form" 
                    type="number" 
                    name="stars" 
                    value={stars}
                    onChange={data => setStars(data.target.value)} />

                    <span className="spn-input">Organização</span>
                    <Input className="inp-form" 
                    name="organization" 
                    value={organization}
                    onChange={data => setOrganization(data.target.value)} />

                    <span className="spn-input">Local (codade/estado)</span>
                    <Input className="inp-form" 
                    name="location" 
                    value={location}
                    onChange={data => setLocation(data.target.value)} />

                    <span className="spn-input">E-mail</span>
                    <Input className="inp-form" 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={data => setEmail(data.target.value)} />

                    <span className="spn-input">Link para rede ou pagina pessoal</span>
                    <Input className="inp-form" 
                    name="link" 
                    value={link}
                    onChange={data => setLink(data.target.value)} />

                    <span className="spn-input">Rede social</span>
                    <Input className="inp-form" 
                    name="web" 
                    value={web}
                    onChange={data => setWeb(data.target.value)} />

                    <span className="spn-input">Senha</span>
                    <Input className="inp-form" 
                    type="password" 
                    name="password" 
                    value={password}
                    onChange={data => setPassword(data.target.value)} />

                    <button className="but-form" type="submit">Salvar</button>
                </Form>
            </div>
        </div>
    )
};

export default AddDev;