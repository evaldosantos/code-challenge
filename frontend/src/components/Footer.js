import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { actions } from '../store/actions';
import { isAppOnline } from '../store/reducers';

const validationSchema = Yup.object().shape({
  sender: Yup.string().min(2).max(50).required('Required'),
  body: Yup.string().min(2).max(250).required('Required'),
});

const initialValues = {
  sender: '',
  body: '',
};

const Footer = ({ sendMessage, isOnline }) => (
  <footer>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // same shape as initial values
        sendMessage(values);
      }}>
      {({ errors, touched }) => (
        <Form class="form">
          <div className="row">
            <label htmlFor="sender">Sender</label>
            <Field name="sender" className={classNames({ invalid: errors.sender && touched.sender })} />
          </div>
          <div className="row">
            <label htmlFor="body">Message</label>
            <Field name="body" className={classNames({ invalid: errors.body && touched.body })} />
          </div>
          <button type="submit" disabled={!isOnline}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </footer>
);

Footer.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  sendMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isOnline: isAppOnline(state),
});

const mapDispatchToProps = {
  sendMessage: actions.sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
