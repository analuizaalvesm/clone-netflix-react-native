import React from 'react';
import { FlatListContainer, FlatListPreview, ImagePreview, LogoPreview, PreviewContainer, PreviewTitle, Menu, Gradient } from './styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Previews = ({ list }) => {
    const navigation = useNavigation();

    return (
        <>
            <FlatListContainer
                horizontal
                data={list}
                renderItem={({ item, index }) => {

                    const uri = `https://image.tmdb.org/t/p/w342/${item.poster_path}`;

                    return (
                        <TouchableOpacity key={index} style={{ marginLeft: index == 0 ? 20 : 0, marginRight: 10 }} onPress={() => navigation.push('Movie',{
                            item,
                        })}>
                            <FlatListPreview>
                                <ImagePreview source={{
                                    uri,
                                }} />
                                <Gradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />
                            </FlatListPreview>
                        </TouchableOpacity>
                    );
                }}
                
            />
        </>
    )
}

export default Previews;