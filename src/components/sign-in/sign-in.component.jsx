import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(err) {
            switch(err.code){
                case 'auth/wrong-password':
                    alert('Sign-in error: unvalid password.');
                    break;
                case 'auth/user-not-found':
                    alert('Sign-in error: user does not exist.');
                    break;
                default:
                    console.log(err);
            }
            
        }


    }

    
    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value,
        })
    }
    
    render() {
        return(
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        autoComplete='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required />
                    
                    <FormInput
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='Password'
                        required />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        )
    }
};

export default SignIn;