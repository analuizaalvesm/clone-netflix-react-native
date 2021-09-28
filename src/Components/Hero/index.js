import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Badge, HeroBackground, Logo, MostWatched, MostWatchedText, HeroGradient } from './styles';

const Hero = () => {
    return (
        <>
            <SafeAreaView>
                <HeroBackground 
                    source={{ uri: 'https://canalcienciascriminais.com.br/wp-content/uploads/2016/09/Tropa-de-Elite.jpg' }}>    
                    <View>
                        <Logo 
                            resizeMode="contain"
                            source={{ uri: 'https://i.imgur.com/oDHGhpX.png' }}/>
                    </View>
                    <MostWatched>
                        <Badge 
                            resizeMode="contain"
                            source={require('../../assets/badge-top-10.png')}/>
                        <MostWatchedText>Top 10 de hoje no Brasil</MostWatchedText>
                    </MostWatched>
                    <HeroGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}/>
                </HeroBackground>
            </SafeAreaView>
        </>
    )
}

export default Hero;