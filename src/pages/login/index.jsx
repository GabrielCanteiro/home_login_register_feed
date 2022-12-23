import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'Campo obrigatório').required('no mínimo 3 caracteres'),
  }).required();

const Login = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const handleClickRegister = () => {
      navigate('/register')
    }

    const handleClickLogin = () => {
        navigate('/feed')
      }

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.password}`);
            
            if(data.length === 1){
                navigate('/feed') 
            }else{
                alert('email ou senha inválido')
            }
        }catch{
            alert('Tente novamente')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" errorMessage={errors?.email?.message} leftIcon={<MdEmail />} name="email"  control={control} />
                   
                    <Input type="password" errorMessage={errors?.password?.message} placeholder="Senha" leftIcon={<MdLock />}  name="password" control={control} />
                   
                    <Button title="Entrar" variant="secondary" type="submit" onClick={handleClickLogin}/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText onClick={handleClickRegister}>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login }