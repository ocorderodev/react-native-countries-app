import React from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/utils/store';
import CountryScreen from './src/screens/CountryScreen';

const App = () => {

  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView>
          <CountryScreen/>
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
