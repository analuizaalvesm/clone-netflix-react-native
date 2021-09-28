import React from 'react';
import styled from 'styled-components/native';
import { TextInput, Button } from 'react-native-paper';

export const Background = styled.View`
    background-color: #000;
    flex: 1;
    justify-content: center;
    padding: 20px;
`;

export const NetflixLogo = styled.Image`
    width: 100%;
    align-self: center;
    justify-content: center;
    margin-bottom: 50px;
`;

export const CredentialsView = styled.View`
    
`;

export const Input = styled(TextInput)`
    margin-bottom: 20px;
`;

export const LoginButton = styled(Button)`
    padding: 10px;
    margin-bottom: 20px;
`;

export const ForgotPassword = styled(Button)`
    margin-bottom: 20px;
`;

export const Info = styled.Text`
    color: rgba(255,255,255,0.6);
    text-align: center;
    margin-top: 30px;
`;

