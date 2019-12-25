import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const Title = (props) => {
  const { avatar, name, introduction } = props;
  return (
    <div>
      <Avatar src={avatar} />
      <Typography variant="h1">{name}</Typography>
      <Typography variant="body1">{introduction}</Typography>
    </div>
  );
};

Title.defaultProps = {
  avatar: `${process.env.PUBLIC_URL}/profile.jpg`,
  name: 'Kevin Olsson',
  introduction: 'Front-end developer & UX Designer. This is the blog I keep promising myself I’d build.',
};

Title.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  introduction: PropTypes.string,
};

export default Title;
