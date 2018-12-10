import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
    },
    loading: false,
    errors: {},
  };

  onInputChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.submit(this.state.data).catch(err => this.setState({ errors: err.response.data.errors, loading: false }));
    }
  };

  validate = data => {
    let errors = {};
    if (!validator.isEmail(data.email)) errors.email = 'Invalid email';
    if (!data.password) errors.password = "Password can't be blank";
    return errors;
  };

  render() {
    const { data, errors } = this.state;
    return (
      <form onSubmit={this.onSubmit} noValidate>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={data.email} onChange={this.onInputChange} />
        </fieldset>
        {errors.email && <span>{errors.email}</span>}

        <fieldset>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" value={data.password} onChange={this.onInputChange} />
        </fieldset>
        {errors.password && <span>{errors.password}</span>}

        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default LoginForm;
