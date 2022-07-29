import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

export const Profile = () => (
    <Container>
      <Header>
        <Avatar src='https://avatars.githubusercontent.com/u/34866064?v=4'/>
        <Login>junioralbino</Login>
        <Name>Junior Albino</Name>
      </Header>
      <Inner>
        <Data>
           <MdGroup size={20} />&nbsp; 30&nbsp; <i>seguidores</i>&nbsp; &middot; 10 <i>&nbsp;seguindo</i>
        </Data>
        <Data>
             <MdWork size={20} /> Infocena Sistemas
        </Data>
         <Data>
             <MdLocationCity size={20} /> Contagem - MG
        </Data>
        <Data>
           <MdLink />&nbsp; <a href='https://junioralbino.com.br'>Junioralbino</a>
        </Data>
      </Inner>
    </Container>
);
export default Profile