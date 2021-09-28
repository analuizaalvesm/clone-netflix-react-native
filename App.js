import React from 'react';
import Routes from './Routes';
import { StatusBar } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Movie from './src/Pages/Movie';


const App = () => {

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      placeholder: '#CCCCCC',
      text: "#FFFFFF",
    }
  }
  return (
    <PaperProvider theme={theme}>
      <StatusBar backgroundColor="#000"/>
      <Routes/>
    </PaperProvider>
  );
};

export default App;