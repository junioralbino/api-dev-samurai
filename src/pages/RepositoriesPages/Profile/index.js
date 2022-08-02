import React from 'react';
import PropTypes from 'prop-types';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

export const Profile = ({user}) => (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
           <MdGroup size={20} />&nbsp; {user.following}&nbsp; <i>seguidores</i>&nbsp; &middot; {user.followers} <i>&nbsp;seguindo</i>
        </Data>
        {/* Validado se o use.company existe */}
        {user.company && (
          <Data>
            <MdWork size={20} /> {user.company}
          </Data>
         )}

        {/* Validado se o user.location existe */}
        {user.location && (
          <Data>
          <MdLocationCity size={20} /> {user.location}
          </Data>
         )}
        
        {/* Validado se o user.blog existe */}
        {user.blog && (
          <Data>
          <MdLocationCity size={20} /> {user.blog}
          </Data>
         )}

      </Inner>
    </Container>
);
Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name:  PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string
  }).isRequired,
};

export default Profile