import React from 'react'
import { Container, Sidebar, Main } from './styles';

import Profile from './Profile/index';

const RepositoriesPages = () => (
    <Container>
     <Sidebar><Profile /></Sidebar>
     <Main>Main</Main>
    </Container>
);

export default RepositoriesPages