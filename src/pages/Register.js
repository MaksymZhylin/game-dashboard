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

function Register({ register, handleSubmit, errors }) {
  /* eslint-disable react/jsx-props-no-spreading */

  return (
    <Form onSubmit={handleSubmit}>
      <Text>
        <MainText>Welcome</MainText>
        <Subtext>Welcome! Please enter your details</Subtext>
      </Text>

      <InputContainer>
        <Input
          {...register('name')}
          type='text'
          name='name'
          placeholder='Name'
        />
        <Subtext> {errors.name?.message} </Subtext>
        <Input
          {...register('email')}
          type='text'
          name='email'
          placeholder='Email'
        />
        <Subtext> {errors.email?.message} </Subtext>
        <Input
          {...register('password')}
          type='password'
          name='password'
          placeholder='Password'
        />
        <Subtext> {errors.password?.message} </Subtext>
      </InputContainer>

      <Submit type='submit' id='submit' value='Create account' />
      <Footer>
        <FooterText>Or</FooterText>
        <FooterLink href='/login'>Log in</FooterLink>
      </Footer>
    </Form>
  );
}

export default Register;
