import React from 'react';
import {
  Form,
  Text,
  MainText,
  Subtext,
  InputContainer,
  Input,
  Submit,
  Footer,
  FooterText,
  FooterLink,
} from '../styles/Form';

function Login({ handleSubmit, register, errors }) {
  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <Form onSubmit={handleSubmit}>
      <Text>
        <MainText>Welcome back</MainText>
        <Subtext>Welcome! Please enter your details</Subtext>
      </Text>

      <InputContainer>
        <Input
          {...register('email')}
          type='text'
          name='email'
          placeholder='Email'
          {...register('email')}
        />
        <Subtext> {errors.email?.message} </Subtext>
        <Input
          {...register('password')}
          type='password'
          name='password'
          placeholder='Password'
          {...register('password')}
        />
        <Subtext> {errors.password?.message} </Subtext>
      </InputContainer>

      <Submit type='submit' id='submit' value='Log in' />
      <Footer>
        <FooterText>Or</FooterText>
        <FooterLink href='/register'>Sing up</FooterLink>
      </Footer>
    </Form>
  );
}

export default Login;
