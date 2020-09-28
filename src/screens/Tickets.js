import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import axios from '~/plugins/axios';

import getTickets from '~/redux/actions/getTickets';

import layout from '~/scss/layout/default.scss';
import styles from '~/scss/screens/tickets.scss';

import { Appbar, User, Text, Button, Ticket } from '~/components';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
  }

  UNSAFE_componentWillMount() {
    axios
      .get('/tickets')
      .then(({ data }) => {
        let userTickets = data.filter(
          (item) => item.user === this.props.user.id,
        );
        this.props.getTickets(userTickets);
      })
      .catch(console.error);
  }

  ticketList = () => {
    return this.props.tickets.map((item) => {
      return <Ticket style={styles.ticket} key={item.id} item={item} />;
    });
  };

  render() {
    return (
      <View>
        <Appbar style={layout.appbar} />

        <User user={this.props.user} />

        <View style={layout.navigation}>
          <Button style={layout.navigationButton}>Tickets</Button>
          <Button outlined onPress={() => this.props.history.push('/cards')}>
            Tarjetas
          </Button>
        </View>

        <View style={layout.main}>
          <Text style={layout.mainSubtitle} bold>
            Historial de tickets
          </Text>

          {this.ticketList()}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTickets: (tickets) => dispatch(getTickets(tickets)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
