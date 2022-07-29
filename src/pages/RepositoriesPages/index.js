import React from 'react'
import { Container, Sidebar, Main } from './styles';

import Profile from './Profile/index';
import Filter from './Filter/index';
import Repositories from './Repositories/index';

const RepositoriesPages = () => (
    <Container>
     <Sidebar>
        <Profile />
        <Filter />
    </Sidebar>
     <Main>
       <Repositories />
     </Main>
    </Container>
);

export default RepositoriesPages