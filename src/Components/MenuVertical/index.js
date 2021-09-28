import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ButtonMenu, TextMenu } from './styles';

const MenuVertical = ({ icon, text }) => {
    return (
        <ButtonMenu>
            <Icon name={icon} color="#ffffff" size={20} />
            <TextMenu>{text}</TextMenu>
        </ButtonMenu>
    )
}

export default MenuVertical;