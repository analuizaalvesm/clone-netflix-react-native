import styled from 'styled-components/native';
import { Title } from 'react-native-paper';

export const SectionView = styled.View`
    width: 100%;
`;

export const BorderTop = styled.View`
    background: #E50914;
    height: 3px;
    width: 100px;
    left: 20px;
    margin-bottom: 10px;
`;

export const SectionTitle = styled(Title)`
    color: #ffffff;
    font-size: 24px;
    margin-left: 20px;
`;

export const SectionList = styled.FlatList`
    width: 100%;
    height: 180px;
    margin-top: 10px;
    margin-bottom: 30px;
`;

export const SectionBanner = styled.ImageBackground`
    width: 120px;
    height: 180px;
    border-radius: 5px;
    overflow: hidden;
`;

export const SectionLogo = styled.Image`
    width: 100px;
    height: 45px;
    position: absolute;
    align-self: center;
    bottom: 20;
    z-index: 10;
`;