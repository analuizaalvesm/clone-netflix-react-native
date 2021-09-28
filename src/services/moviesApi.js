import axios from 'axios';
import api from './api';

const apiKey = 'api_key=86ec1a3e956653ab6922daed9c4230a1';
const language = 'language=pt-BR';

export const GetFilmsTrending = (page) => {
    const url = `trending/movie/week?${apiKey}&${language}&page=${page}`;
    return api.get(url);
}

export const GetFilmsPlayingNow = (page) => {
    const url = `movie/now_playing?${apiKey}&${language}&page=${page}`;
    return api.get(url);
}

export const GetGenders = () => {
    const url = `genre/movie/list?${apiKey}&${language}`;
    return api.get(url);
}

export const GetFilmsDiscover = () => {
    const url = `discover/movie?${apiKey}&with_genres=28`;
    return api.get(url);
}