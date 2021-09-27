import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, View, ScrollView, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Location from 'react-native-vector-icons/SimpleLineIcons';
import hotels from '../../consts/hotels';

const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({ navigation }) => {
    const categories = ['Todos', 'Populares', 'Melhores avaliações', 'Ofertas'];
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

    const CategoryList = () => {
        return (
            <View style={style.categoryListContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectedCategoryIndex(index)}>
                        <View>
                            <Text style={{
                                ...style.categoryListText,
                                color:
                                    selectedCategoryIndex == index
                                        ? '#FF9330'
                                        : 'gray'
                            }}>
                                {item}
                            </Text>
                            {selectedCategoryIndex == index &&
                                <View style={{ height: 3, width: 30, backgroundColor: '#FF9330', marginTop: 2 }} />
                            }
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    const CardOffers = ({ hotel, index }) => {
        return (
            <View style={style.cardOffers}>
                <Image source={hotel.image} style={style.cardOffersImage}/>
                <View style={style.cardOffersDetails}>
                    <Text>{hotel.name}</Text>
                    <View>
                        <Location name="location-pin" size={12} color='#FF9330'/>
                        <Text>{hotel.location}</Text>
                    </View>
                    <Text>{hotel.price}</Text>
                </View>
            </View>
        );
    };

    const Card = ({ hotel, index }) => {
        return (
            <View style={{ ...style.card }}>
                <View style={style.favorite}>
                    <Icon name="heart" size={22} color='white' />
                </View>
                <Image source={hotel.image} style={style.cardImage} />
                <View style={style.cardText}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>{hotel.name}</Text>
                    <View style={style.cardLocation}>
                        <Location name="location-pin" size={18} color='white' />
                        <Text style={{ fontSize: 16, color: 'white', paddingStart: 2 }}>{hotel.location}</Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <ScrollView>
                <StatusBar />
                <View style={style.header}>
                    <View style={{ paddingBottom: 15 }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Olá, Fulano</Text>
                    </View>
                    <Icon name="shopping-bag" size={34} color='black' />
                </View>
                <View style={style.searchInputContainer}>
                    <Icon name="search" size={24} style={{ marginLeft: 20 }} />
                    <TextInput
                        placeholder="Pesquisar hotéis"
                        style={{ fontSize: 22, paddingLeft: 10 }}
                    />
                </View>
                <CategoryList />
                <View>
                    <FlatList
                        horizontal
                        data={hotels}
                        contentContainerStyle={{ paddingVertical: 30, paddingLeft: 20 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => <Card hotel={item} index={index} />}
                    />
                </View>
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginHorizontal: 20 }}>
                    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Mais ofertas para você</Text>
                    <FlatList
                        vertical
                        data={hotels}
                        contentContainerStyle={{ paddingVertical: 20 }}
                        scrollEnabled={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => <CardOffers hotel={item} index={index} />}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}

export default HomeScreen;

const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    searchInputContainer: {
        height: 50,
        backgroundColor: '#EBEBEB',
        marginTop: 15,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryListContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 30,
    },
    categoryListText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    card: {
        height: 200,
        width: cardWidth,
        elevation: 15,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: 'gray',
    },
    cardOffers: {
        height: 150,
        width: '100%',
        elevation: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        marginVertical: 8,
    },
    cardImage: {
        height: 200,
        width: "100%",
        borderRadius: 10,
    },
    cardOffersImage: {
        height: 150,
        width: '45%',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }, 
    cardOffersDetails: {
        position: 'absolute',
        left: 180,
    },
    favorite: {
        height: 50,
        width: 50,
        backgroundColor: '#FF9330',
        position: 'absolute',
        zIndex: 1,
        right: 0,
        borderRadius: 50,
        marginStart: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardText: {
        position: 'absolute',
        top: 145,
        left: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    cardLocation: {
        flexDirection: 'row',
        marginVertical: 2,
    }
});