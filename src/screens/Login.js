import React from 'react';
import {Image, View} from 'react-native';

import layout from '../scss/layout/login.scss';
import styles from '../scss/screens/login.scss';

import Heading from '../components/Heading';
import Text from '../components/Text';
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import Link from '../components/Link';

class Login extends React.Component {
  render() {
    return (
      <View style={layout.login}>
        <Image
          style={styles.ilustration}
          source={require('../assets/img/car.png')}
        />
        <Heading>Bienvenido a DRIVE</Heading>
        <Text>La forma inteligente de manejar tu auto</Text>

        <View style={styles.field}>
          <Textfield placeholder="Correo electrónico" />
        </View>

        <View style={styles.field}>
          <Textfield placeholder="Contraseña" secureEntry />
        </View>

        <View style={styles.field}>
          <Button block>Iniciar sesión</Button>
        </View>

        <View style={styles.field}>
          <Link to="/signup">¿Nuevo aquí? Registrate gratis</Link>
        </View>
      </View>
    );
  }
}

export default Login;
