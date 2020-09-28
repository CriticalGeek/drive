import React from 'react';
import { View, BackHandler } from 'react-native';

import layout from '~/scss/layout/login.scss';
import styles from '~/scss/screens/newcard.scss';

import { Appbar, Heading, Textfield, Button, CardPreview } from '~/components';

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {
        name: 'Antonio Alvarez',
        number: '0248',
        img: 'https://drive-assets.s3.us-east-2.amazonaws.com/visa.png',
      },
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
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

  render() {
    return (
      <View>
        <Appbar hasBackward />

        <View style={layout.login}>
          <Heading style={styles.heading}>Agrega una nueva tarjeta</Heading>

          <CardPreview style={styles.cardpreview} info={this.state.card} />

          <Textfield style={styles.field} placeholder="4 digitos de tarjeta" />
          <Textfield style={styles.field} placeholder="Nombre del titular" />

          <Button block>Agregar tarjeta</Button>
        </View>
      </View>
    );
  }
}

export default NewCard;
