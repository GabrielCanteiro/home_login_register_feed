import React from 'react'
import {InputContainer, InputText, IconContainer, ErrorText } from './styles';

const RegisterInput = ({leftIcon, name, control, errorMessage, ...rest}) => {


  return (
    <>
    <InputContainer>
        <IconContainer>{leftIcon}</IconContainer> <InputText placeholder={name}></InputText>
    </InputContainer>
    
    </>

  )
}

export { RegisterInput }; 
