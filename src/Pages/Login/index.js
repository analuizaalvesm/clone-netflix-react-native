import React, { useState } from 'react';
import { Background, NetflixLogo, CredentialsView, Input, LoginButton, ForgotPassword, Info } from './styles';

const Login = ({ navigation }) => {

    const [credentials, SetCredentials] = useState({
        email: '',
        password: ''
    })

    return (
        <Background>
            <NetflixLogo resizeMode="contain" source={require('../../assets/logo.png')}/>
            <CredentialsView>
                <Input
                    label="Email ou número de telefone"
                    mode="flat"
                    value={credentials.email}
                    onChangeText={(text) => setCredentials({...credentials, email: text})}
                />
                <Input
                    label="Senha"
                    mode="flat"
                    secureTextEntry
                    value={credentials.password}
                    onChangeText={(text) => setCredentials({...credentials, password: text})}
                />

                <LoginButton
                    mode="contained"
                    onPress={() => navigation.navigate('Home')}>
                    Entrar
                </LoginButton>
                <ForgotPassword
                    onPress={() => console.log('Pressed')}
                    theme={{ colors: {primary: '#fff'}}}>
                    Recuperar senha
                </ForgotPassword>

                <Info>O acesso está protegido pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Info>
            </CredentialsView>
        </Background>
    );
};

export default Login;