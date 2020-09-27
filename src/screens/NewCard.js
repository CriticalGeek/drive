import React from 'react';
import {View, BackHandler} from 'react-native';

import layout from '~/scss/layout/login.scss';
import styles from '~/scss/screens/newcard.scss';

import {Appbar, Heading, Textfield, Button} from '~/components';

class NewCard extends React.Component {
  constructor(props) {
    super(props);
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

          <Textfield style={styles.field} placeholder="Numero de tarjeta" />
          <Textfield style={styles.field} placeholder="MM" />
          <Textfield style={styles.field} placeholder="YYYY" />
          <Textfield style={styles.field} placeholder="CVV" />

          <Button block>Agregar tarjeta</Button>
        </View>
      </View>
    );
  }
}

export default NewCard;
