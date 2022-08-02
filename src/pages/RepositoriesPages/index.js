import React from 'react'
import { Container, Sidebar, Main } from './styles';

import Profile from './Profile/index';
import Filter from './Filter/index';
import Repositories from './Repositories/index';

const RepositoriesPages = () => {
  const user  = {
    login: 'devsamurai',
    name:  'Dev Junior',
    avatar_url: 'https://avatars.githubusercontent.com/u/55540536?s=200&v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: "https://devsamurai.com.br",
    location: "São José dos Campos - SP",
  };

  const respositories = [
    { name: 'Repo 1', description: 'Descrição', html_url: 'https://devsamurai.com.br', language: 'Javascript'},
    { name: 'Repo 2', description: 'Descrição 2', html_url: 'https://devsamurai.com.br', language: 'PHP'},
    { name: 'Repo 3', description: 'Descrição 3', html_url: 'https://devsamurai.com.br', language: 'Ruby'},
    { name: 'Repo 4', description: 'Descrição 4', html_url: 'https://devsamurai.com.br', language: 'JAVA'},
    { name: 'Repo 5', description: 'Descrição 5', html_url: 'https://devsamurai.com.br', language: 'TypeScript'},
  ];
   
  //Calculos do filter
  const languagens = [
    {name: 'Javascript', count: 3, color: '#f1c40f'},
    {name: 'Shell', count: 2, color: '#95a5a6'},
    {name: 'PHP', count: 2, color: '#3498db'},
    {name: 'Ruby', count: 1, color: '#e74c3c'},
  ];

  return (
    <Container>
     <Sidebar>
        <Profile user={user} />
        <Filter  languagens={languagens} />
    </Sidebar>
     <Main>
       <Repositories />
     </Main>
    </Container>
)};

export default RepositoriesPages