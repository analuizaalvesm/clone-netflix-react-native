import React from 'react';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const HeaderText = styled.Text`
    color: white;
    font-size: 16px;
`

export const HeaderSafeArea = styled.SafeAreaView`
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
    height: 140px;
    align-items: center;
`;

export const HeaderContainer = styled(LinearGradient)`
    position: absolute;
    top: 0;
    z-index: 999;
`;