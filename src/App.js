import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import Login from './screens/Login';
import Signup from './screens/Signup';

class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar />
        <NativeRouter>
          <SafeAreaView>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </SafeAreaView>
        </NativeRouter>
      </>
    );
  }
}

export default App;
