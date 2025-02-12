import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, FormGroup, Label, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';

import { setLoading, registerUser } from '../../redux/auth-slice';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import { NotificationManager } from '../../components/common/react-notifications';
// import { adminRoot } from '../../constants/defaultValues';

const validatePassword = value => {
  let error;
  if (!value) {
    error = 'Por favor ingresa tu contraseña';
  }
  return error;
};

const validateEmail = value => {
  let error;
  if (!value) {
    error = 'Por favor ingresa tu email';
  }
  return error;
};

const Register = ({
  history,
  loading,
  error,
  setLoadingAction,
  registerUserAction
}) => {
  const [email] = useState('');
  const [password] = useState('');
  // const [name] = useState('Sarah Kortney');

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Oops', 3000, null, null, '');
    }
  }, [error]);

  const onUserRegister = values => {
    if (!loading && values.email !== '' && values.password !== '') {
      setLoadingAction();
      registerUserAction({
        email: values.email,
        password: values.password,
        history
      });
      // history.push(adminRoot);
    }
  };

  const initialValues = { email, password };

  return (
    <Row className="h-100">
      <Colxx xxs="12" md="10" className="mx-auto my-auto">
        <Card className="auth-card">
          <div className="position-relative image-side ">
            <p className="text-white h2">AXIORA</p>
            <p className="white mb-0">
              Por favor completa el formulario para registrarte. <br />
              Si ya eres miembro, por favor{' '}
              <NavLink to="/user/login" className="white">
                inicia sesión
              </NavLink>
              .
            </p>
          </div>
          <div className="form-side">
            <NavLink to="/" className="white">
              <span className="logo-single" />
            </NavLink>
            <CardTitle className="mb-4">
              <IntlMessages id="user.register" />
            </CardTitle>
            <Formik initialValues={initialValues} onSubmit={onUserRegister}>
              {({ errors, touched }) => (
                <Form>
                  {/* <FormGroup className="form-group has-float-label">
                <Label>
                  <IntlMessages id="user.fullname" />
                </Label>
                <Input type="name" defaultValue={name} />
              </FormGroup> */}

                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.email" />
                    </Label>
                    <Field
                      className="form-control"
                      name="email"
                      validate={validateEmail}
                    />
                    {errors.email && touched.email && (
                      <div className="invalid-feedback d-block">
                        {errors.email}
                      </div>
                    )}
                  </FormGroup>

                  <FormGroup className="form-group has-float-label">
                    <Label>
                      <IntlMessages id="user.password" />
                    </Label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      validate={validatePassword}
                    />
                    {errors.password && touched.password && (
                      <div className="invalid-feedback d-block">
                        {errors.password}
                      </div>
                    )}
                  </FormGroup>

                  <div className="d-flex justify-content-end align-items-center">
                    <Button
                      type="submit"
                      color="primary"
                      className={`btn-shadow btn-multiple-state ${
                        loading ? 'show-spinner' : ''
                      }`}
                      size="lg"
                    >
                      <span className="spinner d-inline-block">
                        <span className="bounce1" />
                        <span className="bounce2" />
                        <span className="bounce3" />
                      </span>
                      <span className="label">
                        <IntlMessages id="user.register-button" />
                      </span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </Colxx>
    </Row>
  );
};

const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  setLoadingAction: setLoading,
  registerUserAction: registerUser
})(Register);
