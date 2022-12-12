import React from 'react'
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { RegisterInput } from '../../components/RegisterInput';
import { Container, Form, Text } from './styles';




const Register = () => {
  
  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/login')
  }


  return (<>
    <Header/>
    <Container>
      <Text>
       <p>
       A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
       </p>
      </Text>

      <Form>
        <h1>Comece agora grátis</h1>
        <h3>Crie sua conta e make the change._</h3>
        <br />

        <RegisterInput name={'Nome Completo'} leftIcon={<MdPerson/>}/>
        <RegisterInput name={'E-mail'} leftIcon={<MdEmail/>}/>
        <RegisterInput name={'Password'} leftIcon={<MdLock/>}/>

        <Button title="Criar minha conta" variant="secondary" type="submit"></Button>
        <br />
        <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>

        <span>Já tenho conta. <a href="#noRef" onClick={handleClickSignIn}>Fazer Login</a></span>
      </Form>


    </Container>
  </>
  )
}

export { Register }