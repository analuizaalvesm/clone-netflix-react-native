import React, { useState, useEffect } from 'react';
import { Paragraph, Title } from 'react-native-paper';
import { View } from 'react-native';
import { Background, Gradient, MovieImage, MovieDetails, MovieTitle, PlayButton, CaptionDetails, CaptionWhite, MenuContainer, GoBack, RelatedMovies } from './styles';
import MenuVertical from '../../Components/MenuVertical';
import Sections from '../../Components/Sections';
import { useNavigation } from '@react-navigation/native';
import { GetFilmsTrending } from '../../services/moviesApi';
import moment from 'moment';

const Movie = ({route}) => {
    const movie = route.params.item;
    const navigation = useNavigation()
    const uri = `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
    const [listTrending, setListTrending] = useState([]);

    // trending

    const getFilmsTrending = async () => {
        const response = await GetFilmsTrending(1);
        setListTrending(response.data.results);
    }
    useEffect(() => {
        getFilmsTrending();
    }, []);

    return (
        <Background>
            <View>
                <GoBack icon="arrow-left" size={30} color={'#000'} onPress={()=> navigation.goBack()}/>
                <MovieImage source={{ uri, }} />
                <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
            </View>
            <MovieDetails>
                <MovieTitle>{movie.title} ({movie.original_title})</MovieTitle>
                <PlayButton
                    icon="play"
                    uppercase={false}
                    mode="contained"
                    color="#fff"
                >Assistir
                </PlayButton>

                <Paragraph>{movie.overview}</Paragraph>

                <CaptionDetails>
                    Data de lançamento:{' '}
                    <CaptionWhite>{moment(movie.release_date).format('YYYY')}</CaptionWhite>{' '}
                    Avaliação: {' '}
                    <CaptionWhite>{movie.vote_average}</CaptionWhite>{' '}
                </CaptionDetails>

                <MenuContainer>
                    <MenuVertical icon="plus" text="Minha Lista" />
                    <MenuVertical icon="thumb-up" text="Gostei" />
                    <MenuVertical icon="send" text="Compartilhe" />
                    <MenuVertical icon="download" text="Baixar" />
                </MenuContainer>

            </MovieDetails>
            <RelatedMovies>Relacionados</RelatedMovies>
            <Sections list={listTrending}/>
        </Background>
    )
}

export default Movie;