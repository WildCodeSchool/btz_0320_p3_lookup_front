import React from 'react';
import PropTypes from 'prop-types';

import style from './UserCard.module.css';

const UserCard = ({ name, position, text, photo }) => {
  return (
    <>
      <img className={style.picture} src={photo} alt={name} />
      <h3 className={style.name}> {name}</h3>
      <h6 className={style.position}>{position}</h6>
      <p className={style.text}>{text}</p>
    </>
  );
};

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
export default UserCard;
