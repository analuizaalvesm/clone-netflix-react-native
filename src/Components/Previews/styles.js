import React from 'react';
import styled from 'styled-components/native';
import { Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


export const PreviewTitle = styled(Title)`
    margin-left: 20px;
    font-size: 24px;
`;

export const FlatListContainer = styled.FlatList`
    width: 100%;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const FlatListPreview = styled.View`
    background-color: red;
    padding: 2.5px;
    width: 100px;
    height: 100px;
    border-radius: 100px;
`;

export const ImagePreview = styled.Image`
    height: 95px;
    width: 95px;
    border-radius: 95px;
`;

export const LogoPreview = styled.Image`
    width: 90px;
    height: 45px;
    position: absolute;
    z-index: 10;
    bottom: 0;
    align-self: center;
`;

export const Gradient = styled(LinearGradient)`
    width: 100%;
    height: 40px;
    position: absolute;
    z-index: 9;
    bottom: 0;
`;