import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import { useFonts } from 'expo-font';



const App = () => {

  const [loaded] = useFonts({
    Gotham: require('./assets/fonts/gotham.ttf'),
    AGK: require('./assets/fonts/aktivgroteskcorp_medium.ttf'),
  });
  
  if (!loaded) {
    return (null)
  } else {
    return (
      <AuthProvider>
        <Provider store={store}>
        <Navigation /> 
        </Provider>
      </AuthProvider>
    );
  }      
}

export default App;
