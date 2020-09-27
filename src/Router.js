import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import {SafeAreaView} from 'react-native';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Tickets from './screens/Tickets';

class AppRouter extends React.Component {
  render() {
    return (
      <>
        <NativeRouter>
          <SafeAreaView>
            <KeyboardAwareScrollView>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/tickets" component={Tickets} />
              </Switch>
            </KeyboardAwareScrollView>
          </SafeAreaView>
        </NativeRouter>
      </>
    );
  }
}

export default AppRouter;
