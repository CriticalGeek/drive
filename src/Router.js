import React from 'react';
import {NativeRouter, Switch, Route, Redirect} from 'react-router-native';

import {Login, Signup, Tickets, Cards, NewCard} from '~/screens';

class AppRouter extends React.Component {
  render() {
    return (
      <>
        <NativeRouter>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/tickets" component={Tickets} />
            <Route exact path="/cards" component={Cards} />
            <Route exact path="/new-card" component={NewCard} />
            <Redirect from="/" to="/login" />
          </Switch>
        </NativeRouter>
      </>
    );
  }
}

export default AppRouter;
