import React from 'react';

import Profile from './Profile';
import Filter from './Filter';
import Repositories from './Repositories';

import { Container, Sidebar, Main } from './styles';

import { getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const user = {
    login: 'devsamurai',
    name: 'Felipe',
    avatar_url: 'https://avatars.githubusercontent.com/u/55540536?v=4',
    followers: 0,
    following: 0,
    company: null,
    blog: 'https://devsamurai.com.br',
    location: 'São José dos Campos - SP',
  };

  // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'JavaScript',
    },
    {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'JavaScript',
    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'PHP',
    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: null,
    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'TypeScript',
    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: 'https://devsamurai.com.br',
      language: 'Ruby',
    },
  ];

  const languages = getLangsFrom(repositories);

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
