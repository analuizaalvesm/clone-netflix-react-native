import React, { useEffect, useState } from 'react';
import { Background, PreviewContainer, PreviewTitle, Menu, Gradient } from './styles';
import { Button } from 'react-native-paper';

import Header from '../../Components/Header';
import Hero from '../../Components/Hero';
import MenuVertical from '../../Components/MenuVertical';
import Sections from '../../Components/Sections';
import Previews from '../../Components/Previews';

import { GetFilmsTrending, GetFilmsPlayingNow, GetGenders, GetFilmsDiscover } from '../../services/moviesApi';

const Home = () => {
    const [listTrending, setListTrending] = useState([]);
    const [listPlayingNow, setListPlayingNow] = useState([]);
    const [genders, setGender] = useState([]);
    const [listDiscover, setListDiscover] = useState([]);

    // trending

    const getFilmsTrending = async () => {
        const response = await GetFilmsTrending(1);
        setListTrending(response.data.results);
    }
    useEffect(() => {
        getFilmsTrending();
    }, []);

    // now playing

    const getFilmsPlayingNow = async () => {
        const response = await GetFilmsPlayingNow(1);
        setListPlayingNow(response.data.results);
    }
    useEffect(() => {
        getFilmsPlayingNow();
    }, []);

    // genders

    const getFilmsByGender = async () => {
        const response = await GetGenders();
        setGender(response.data.genres);
    }

    useEffect(() => {
        getFilmsByGender();
    }, []);

    // discover

    const GetFilmsDiscover = async () => {
        const response = await GetFilmsDiscover(1);
        setListDiscover(response.data.results);
    }

    useEffect(() => {
        GetFilmsDiscover();
    }, []);

    return (
        <>
            <Background>
                <Header />
                <Hero />
                <Menu>
                    <MenuVertical icon="plus" text="Minha Lista" />
                    <Button
                        icon="play"
                        uppercase={false}
                        mode="contained"
                        color="#fff"
                    >Assistir
                    </Button>
                    <MenuVertical icon="information-outline" text="Saiba Mais" />
                </Menu>

                <PreviewContainer>
                    <PreviewTitle>Em destaque</PreviewTitle>
                    <Previews list={listTrending} />
                </PreviewContainer>

                {
                    genders.map((item) => {
                        const title = `Filmes de ${item.name}`;
                        return <Sections key={`${item.id}`} list={listTrending} title={title} />
                    })
                }

            </Background>
        </>
    )
}

export default Home;