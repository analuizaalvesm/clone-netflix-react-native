import { Button, Caption, Title, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const GoBack = styled(IconButton)`
    position: absolute;
    top: 40;
    left: 10;
    z-index: 999;
`;

export const RelatedMovies = styled(Title)`
    margin-left: 20px;
    font-size: 24px;
`;

export const Gradient = styled(LinearGradient)`
    width: 100%;
    height: 40px;
    position: absolute;
    z-index: 9;
    bottom: 0;
`;

export const Background = styled.ScrollView`
    flex: 1;
    background-color: #000000;
`;

export const MovieImage = styled.ImageBackground`
    height: 300px;
    width: 100%;
`;

export const MovieDetails = styled.View`
    padding: 20px;

`;

export const MovieTitle = styled(Title)`
    font-size: 28px;
`;

export const PlayButton = styled(Button)`
    margin: 20px 0 20px 0;
    padding: 5px;
`;

export const CaptionDetails = styled(Caption)`
    margin-top: 20px;
`;

export const CaptionWhite = styled(Caption)`
    color: #ffffff;
`;

export const MenuContainer = styled.View`
    margin: 20px 0 20px 0;
    width: 100%;
    height: 38px;
    flex-direction: row;
    justify-content: space-between;
`;