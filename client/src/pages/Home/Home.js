import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_MUTATION } from "../../apollo/mutations";
import { Link } from "react-router-dom";
import { Form, FormSpy, Field } from "react-final-form";
import { Box, ButtonDefault, InputText } from "../../components";
import styles from "./styles";
import GLOBAL from "../../global";
import PropTypes from "prop-types";

const Home = ({ refreshTokenFn }) => {
  const [isRemember, setRemember] = useState(
    localStorage.getItem(GLOBAL.REMEMBER_ME) ? true : false
  );
  const [isActiveSubmit, setActiveSubmit] = useState(false);
  const [login] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      const token = login.token;

      refreshTokenFn({
        [GLOBAL.AUTH_TOKEN]: token
      });

      if (isRemember) {
        localStorage.setItem(GLOBAL.REMEMBER_ME, login.user.username);
      } else {
        localStorage.removeItem(GLOBAL.REMEMBER_ME);
      }
    }
  });

  return (
    <div style={styles.container}>
      <Link to="/">
        <img src="/images/logo-std-blue.svg" alt="Career Rocket" />
      </Link>

      <Box style={styles.box}>
        <h1 style={styles.title}>Log In</h1>
        <p style={styles.caption}>
          Please use the authorized manager ID to log in.
        </p>

        <Form
          onSubmit={values => {
            login({
              variables: { ...values }
            });
          }}
        >
          {({ handleSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <FormSpy
                  subscription={{ values: true }}
                  onChange={({ values }) => {
                    if (!values.username) {
                      setActiveSubmit(false);
                    }
                    if (!values.password) {
                      setActiveSubmit(false);
                    }
                    if (values.username && values.password) {
                      setActiveSubmit(true);
                    }
                  }}
                />

                <Field
                  name="username"
                  defaultValue={
                    localStorage.getItem(GLOBAL.REMEMBER_ME)
                      ? localStorage.getItem(GLOBAL.REMEMBER_ME)
                      : null
                  }
                >
                  {props => {
                    return (
                      <InputText
                        {...props}
                        type="text"
                        style={styles.input}
                        label="Username"
                        placeholder="Manager ID"
                        autoComplete="username"
                      />
                    );
                  }}
                </Field>

                <Field name="password">
                  {props => {
                    return (
                      <InputText
                        {...props}
                        type="password"
                        style={styles.input}
                        label="Password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    );
                  }}
                </Field>

                <Field
                  name="rememberMe"
                  type="checkbox"
                  value={
                    localStorage.getItem(GLOBAL.REMEMBER_ME) ? true : false
                  }
                >
                  {({ input }) => {
                    return (
                      <label style={styles.checkBoxContainer}>
                        <input
                          {...input}
                          style={styles.inputCheckBox}
                          type="checkbox"
                          onClick={() => {
                            setRemember(!isRemember);
                          }}
                        />
                        <p style={styles.checkBox}>
                          {isRemember && (
                            <img
                              style={styles.checkBoxImg}
                              src="/images/ic-checked.svg"
                              alt="Check to remember the account information"
                            />
                          )}
                        </p>
                        <p style={styles.checkBoxLabel}>Remember me</p>
                      </label>
                    );
                  }}
                </Field>

                <ButtonDefault type="submit" isActiveSubmit={isActiveSubmit}>
                  Log in
                </ButtonDefault>
              </form>
            );
          }}
        </Form>
      </Box>

      <p style={styles.copyRights}>Yongmin Kim © 2019</p>
    </div>
  );
};

export default Home;

Home.propTypes = {
  refreshTokenFn: PropTypes.func
};
