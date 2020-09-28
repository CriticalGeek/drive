/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import AppRoute from '~/Router';
import store from '~/redux/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <StatusBar />

          <SafeAreaView>
            <KeyboardAwareScrollView>
              <AppRoute />
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </View>
      </Provider>
    );
  }
}

export default App;
