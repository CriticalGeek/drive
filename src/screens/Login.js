import React from 'react';
import {Image, View} from 'react-native';
import {withRouter} from 'react-router-native';

import layout from '~/scss/layout/login.scss';
import styles from '~/scss/screens/login.scss';

import {Heading, Text, Textfield, Button, Link} from '~/components';

class Login extends React.Component {
  render() {
    return (
      <View style={layout.login}>
        <Image
          style={styles.ilustration}
          source={require('~/assets/img/car.png')}
        />

        <Heading>Bienvenido a DRIVE</Heading>
        <Text>La forma inteligente de manejar tu auto</Text>

        <Textfield style={styles.field} placeholder="Correo electrónico" />
        <Textfield placeholder="Contraseña" secureEntry />

        <Button
          style={styles.button}
          onPress={() => this.props.history.push('/tickets')}
          block>
          Iniciar sesión
        </Button>
        <Link to="/signup">¿Nuevo aquí? Registrate gratis</Link>
      </View>
    );
  }
}

export default withRouter(Login);
