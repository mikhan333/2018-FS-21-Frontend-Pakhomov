import React, { Component } from 'react';
import Input from '../../components/Input/Input';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';
import './Auth.css';

class Auth extends Component {
    state={
        controls: {
            login: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Login'
                },
                value: '',
                validation: {
                    isRequired: true,
                },
                valid: false,
                touched: false,
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    isRequired: true,
                    minLength: 6,
                },
                valid: false,
                touched: false,
            },
        }
    };

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.isRequired) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        return isValid;
    };

    handleInput = (event, key) => {
        const updatedControls = {
            ...this.state.controls,
            [key]: {
                ...this.state.controls[key],
                value: event.target.value,
                valid: this.checkValidity(event.target.value, this.state.controls[key].validation),
                touched: true,
            }
        };

        this.setState({ controls: updatedControls });
    };

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(
            this.state.controls.login.value,
            this.state.controls.password.value
        );
    };

    render() {
        const formElements = {...this.state.controls};
        const inputs = Object
            .keys(formElements)
            .map(key => {
                const inputElement = formElements[key];
                return <Input
                    key={key}
                    elementType={inputElement.elementType}
                    elementConfig={inputElement.elementConfig}
                    value={inputElement.value}
                    invalid={!inputElement.valid}
                    touched={inputElement.touched}
                    changed={(event)=> this.handleInput(event, key)}
                />
            });
        let error;
        if (this.props.error) {
            error = <div className="error">promlems with login or password</div>;
        }
        return (
            <form onSubmit={this.submitHandler}>
                {inputs}
                {error}
                <button type="submit" className="submit">
                    Войти
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        onAuth: (login, password) => dispatch(actions.auth(login, password))
    }
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);