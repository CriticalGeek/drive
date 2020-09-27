import React from 'react';
import {View, BackHandler} from 'react-native';

import layout from '../scss/layout/login.scss';
import styles from '../scss/screens/signup.scss';

import Appbar from '../components/Appbar';
import Heading from '../components/Heading';
import Textfield from '../components/Textfield';
import Button from '../components/Button';

class Signup extends React.Component {
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
          <Heading style={styles.heading}>
            Sube a bordo y comienza a disfrutar de DRIVE.
          </Heading>

          <Textfield style={styles.field} placeholder="Nombre completo" />
          <Textfield style={styles.field} placeholder="Correo electrónico" />
          <Textfield
            style={styles.field}
            placeholder="Contraseña"
            secureEntry
          />
          <Textfield placeholder="Confirma tu contraseña" secureEntry />

          <Button style={styles.button} block>
            Registrarme
          </Button>
        </View>
      </View>
    );
  }
}

export default Signup;
