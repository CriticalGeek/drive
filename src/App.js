import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {SafeAreaView, StatusBar} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import Login from './screens/Login';
import Signup from './screens/Signup';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar />
        <NativeRouter>
          <SafeAreaView>
            <KeyboardAwareScrollView>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </NativeRouter>
      </>
    );
  }
}

export default App;
