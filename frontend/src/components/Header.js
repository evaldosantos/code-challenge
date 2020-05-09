import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { isAppOnline } from '../store/reducers';
import { actions } from '../store/actions';

const Header = ({ isOnline, setOnline, setOffline }) => {
  const handleChange = () => (isOnline ? setOffline() : setOnline());

  return (
    <header>
      <FormControlLabel
        control={<Checkbox checked={isOnline} onChange={handleChange} name="gilad" />}
        label="Is online?"
      />
    </header>
  );
};

Header.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  setOnline: PropTypes.func.isRequired,
  setOffline: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isOnline: isAppOnline(state),
});

const mapDispatchToProps = {
  setOnline: actions.setOnline,
  setOffline: actions.setOffline,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
