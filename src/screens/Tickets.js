import React from 'react';
import {View} from 'react-native';

import layout from '../scss/layout/default.scss';
import styles from '../scss/screens/tickets.scss';

import Appbar from '../components/Appbar';
import User from '../components/User';
import Text from '../components/Text';
import Button from '../components/Button';
import Ticket from '../components/Ticket';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resTicketlist: [
        {
          id: 1,
          user: 1,
          number: 'QHJKFDIUWE',
          date: '2020-01-01 12:00:00',
          amount: 100,
        },
        {
          id: 2,
          user: 1,
          number: 'IOQKMFPOSD',
          date: '2020-01-04 14:00:00',
          amount: 20.5,
        },
      ],
    };
  }

  TicketList = () => {
    return this.state.resTicketlist.map((item) => {
      return <Ticket style={styles.ticket} key={item.id} item={item} />;
    });
  };

  render() {
    return (
      <View>
        <Appbar style={layout.appbar} />

        <User />

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

          {this.TicketList()}
        </View>
      </View>
    );
  }
}

export default Tickets;
