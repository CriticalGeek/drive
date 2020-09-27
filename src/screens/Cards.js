import React from 'react';
import { View, BackHandler } from 'react-native';

import layout from '~/scss/layout/default.scss';
import styles from '~/scss/screens/cards.scss';

import { Appbar, User, Text, Button, Card } from '~/components';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      payments: [
        {
          id: 1,
          user: 1,
          numberCard: '0204',
          nameCard: 'Prueba',
          type: 1,
        },
        {
          id: 2,
          user: 1,
          numberCard: '4152',
          nameCard: 'Prueba',
          type: 1,
        },
      ],
    };
  }

  UNSAFE_componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );
  }

  handleBackButtonClick() {
    this.props.history.goBack();
    return true;
  }

  cardList = () => {
    return this.state.payments.map((item) => {
      return <Card style={styles.card} key={item.id} item={item} />;
    });
  };

  render() {
    return (
      <View>
        <Appbar style={layout.appbar} />

        <User />

        <View style={layout.navigation}>
          <Button
            style={layout.navigationButton}
            onPress={() => this.props.history.push('/tickets')}
            outlined
          >
            Tickets
          </Button>
          <Button>Tarjetas</Button>
        </View>

        <View style={layout.main}>
          <Text style={layout.mainSubtitle} bold>
            Mis lista de tarjetas
          </Text>

          {this.cardList()}

          <Button
            style={styles.addNewCard}
            onPress={() => this.props.history.push('/new-card')}
            outlined
          >
            + Agregar nueva tarjeta
          </Button>
        </View>
      </View>
    );
  }
}

export default Tickets;
