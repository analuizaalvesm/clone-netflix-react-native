import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { SectionView, BorderTop, SectionTitle, SectionList, SectionBanner, SectionLogo } from './styles';
import { GetGenders } from '../../services/moviesApi';
import { useNavigation } from '@react-navigation/native';

const Sections = ({ hasTopBorder, list, title }) => {
const navigation = useNavigation();
    return (
        <SectionView>
            {hasTopBorder && <BorderTop />}
            <SectionTitle>{title}</SectionTitle>
            <SectionList
                horizontal
                data={list}
                renderItem={({ item, index }) => {

                    const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.push('Movie',{
                            item,
                        })}>
                            <SectionBanner
                                source={{ 
                                    uri,
                                }}
                                style={{ marginLeft: index == 0 ? 20 : 0, marginRight: 10 }}>
                                {/* <SectionLogo
                                    resizeMode="contain"
                                    source={{ uri: 'https://i.imgur.com/oDHGhpX.png' }} /> */}
                            </SectionBanner>
                        </TouchableOpacity>
                    );
                }}
                
            />
        </SectionView>
    )
}

export default Sections;