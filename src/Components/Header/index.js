import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { HeaderContainer, HeaderSafeArea, HeaderText } from './styles';

const Header = () => {
    return (
        <>
            <HeaderContainer colors={['rgba(0,0,0,1)', 'rgba(0,0,0,0)']}>
                <HeaderSafeArea>
                    <Image source={require('../../assets/logo-compact.png')}/>
                    <TouchableOpacity>
                        <HeaderText>Séries</HeaderText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <HeaderText>Filmes</HeaderText>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <HeaderText>Minha Lista</HeaderText>
                    </TouchableOpacity>
                </HeaderSafeArea>
            </HeaderContainer>
        </>
    )
}

export default Header;