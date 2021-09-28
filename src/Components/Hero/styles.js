import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const HeroBackground = styled.ImageBackground`
    width: 100%;
    height: 400;
`;

export const Logo = styled.Image`
    margin-top: 200px;
    align-self: center;
    width: 300px;
    height: 150px;
    position: absolute;
    z-index: 10;
`;

export const MostWatched = styled.View`
    position: absolute;
    z-index: 10;
    bottom: 20px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Badge = styled.Image`
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

export const MostWatchedText = styled.Text`
    color: #ffffff;
    font-size: 18px;

`;

export const HeroGradient = styled(LinearGradient)`
    width: 100%;
    height: 150px;
    position: absolute;
    z-index: 9;
    bottom: 0;
`;

