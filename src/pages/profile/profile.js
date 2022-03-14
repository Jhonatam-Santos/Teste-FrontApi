import React, { useState, useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import api from '../../services/api';

const Profile = () => {
    const { id } = useParams();
    const [repos, setRepos] = useState([]);

    const useMountEffect = (fun) => useEffect(fun, []);

    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [bio, setBio] = useState();
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();
    const [stars, setStars] = useState();
    const [organization, setOrganization] = useState();
    const [location, setLocation] = useState();
    const [email, setEmail] = useState();
    const [link, setLink] = useState();
    const [web, setWeb] = useState();

    async function getDev() {
        await api.get(`/Dev/search/${id}`).then(response => {
            setName(response.data.name);
            setUsername(response.data.username);
            setBio(response.data.bio);
            setFollowers(response.data.followers);
            setFollowing(response.data.following);
            setStars(response.data.stars);
            setOrganization(response.data.organization);
            setLocation(response.data.location);
            setEmail(response.data.email);
            setLink(response.data.link);
            setWeb(response.data.web);
        });
    }

    useMountEffect(getDev);

    useEffect(() => {
        async function loadRepo() {
            let response = await api.post('/Repo/search', { dev_id: id });
            setRepos(response.data);
        }
       
        loadRepo();
    }, [])

    console.log(repos);

    return (
        <>
        <div className="all">
            
            <div className="user">
                <h1>Imagem</h1>
                <h1>{name}</h1>
                <span>{username}</span>
                <br />
                <span>{bio}</span>
                <br />
                <ul>
                    <li>followers {followers}</li>
                    <li>following {following}</li>
                    <li>stars {stars}</li>
                </ul>
                <br />
                <span>{organization}</span>
                <br />
                <span>{location}</span>
                <br />
                <span>{email}</span>
                <br />
                <span>{web}</span>
                <br />
                <span>{link}</span>
            </div>
            
            <div className="repo">
                <ul>
                    {repos.map(repo => (
                        <li className="repo-item">
                            <strong>{repo.repo_name}</strong>
                            <br />
                            <span>{repo.text}</span>
                            <br />
                            <span>{repo.repo_stars}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </>
    )
};

export default Profile;