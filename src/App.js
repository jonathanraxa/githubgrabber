import React, { useState, useEffect } from 'react';
import { Form, Card, Image, Icon } from 'semantic-ui-react';
import { InfoCard } from './InfoCard';

import './App.scss';
import 'semantic-ui-css/semantic.min.css';

function App() {

  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [followers, setFollowers] = useState('');
  const [following, setFollowing] = useState('');
  const [repos, setRepos] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userInput, setUserInput] = useState('');
  const [userBio, setUserBio] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  }, [])

  const setData = ({ name, login, bio, followers, following, public_repos, avatar_url }) => {
    setError(null);
    setName(name);
    setUserBio(bio);
    setUsername(login);
    setFollowers(followers);
    setFollowing(following);
    setRepos(public_repos);
    setAvatar(avatar_url);
  }

  const handleSearch = e => {
    setUserInput(e.target.value);
  }

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        data.message ? setError(data.message) : (setData(data));
      })
  }
  return (
    <div>

      <div className="gh_navbar">
        <h1>Github Search</h1>
      </div>
      <div className="gh_search">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input onChange={handleSearch} placeholder="Github User" name="name"></Form.Input>
            <Form.Button content="Submit"></Form.Button>
          </Form.Group>
        </Form>
      </div>

      <InfoCard
        name={name}
        userName={userName}
        followers={followers}
        following={following}
        repos={repos}
        avatar={avatar}
        userBio={userBio}
        error={error}
      />


    </div>
  );
}

export default App;
