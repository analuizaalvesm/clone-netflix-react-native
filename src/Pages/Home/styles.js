import React from 'react';
import styled from 'styled-components/native';
import { Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

export const Background = styled.ScrollView`
    background-color: #000;
    flex: 1;
`;

export const Menu = styled.View`
    width: 100%;
    height: 38px;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const PreviewContainer = styled.View`
    width: 100%;
    margin-top: 50px;
`;

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
    background-color: #E50914;
    padding: 2.5px;
    width: 90px;
    height: 90px;
    border-radius: 90px;
`;

export const ImagePreview = styled.Image`
    height: 86px;
    width: 86px;
    border-radius: 86px;
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
    height: 60px;
    position: absolute;
    z-index: 9;
    bottom: 0;
`;