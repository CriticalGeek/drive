import React from 'react';
import { View, BackHandler, Alert } from 'react-native';
import axios from '~/plugins/axios';

import layout from '~/scss/layout/login.scss';
import styles from '~/scss/screens/signup.scss';

import { Appbar, Heading, Textfield, Button } from '~/components';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
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

  registerUser = () => {
    if (
      this.state.email &&
      this.state.password &&
      this.state.confirmPassword &&
      this.state.name
    ) {
      if (this.state.password === this.state.confirmPassword) {
        axios
          .get('/users')
          .then(({ data }) => {
            let newId = data.length > 0 ? data[data.length - 1].id + 1 : 1;

            let user = {
              id: newId,
              email: this.state.email,
              password: this.state.password,
              name: this.state.name,
            };

            axios
              .post('/users', user)
              .then(() => {
                this.props.history.goBack();
              })
              .catch(console.error);
          })
          .catch(console.error);
      } else {
        Alert.alert('Las contraseñas no coinciden');
      }
    } else {
      Alert.alert('Porfavor rellena los campos');
    }
  };

  render() {
    return (
      <View>
        <Appbar hasBackward />

        <View style={layout.login}>
          <Heading style={styles.heading}>
            Sube a bordo y comienza a disfrutar de DRIVE.
          </Heading>

          <Textfield
            style={styles.field}
            placeholder="Nombre completo"
            value={this.state.name}
            onChange={(value) => this.setState({ name: value })}
          />
          <Textfield
            style={styles.field}
            placeholder="Correo electrónico"
            value={this.state.email}
            onChange={(value) => this.setState({ email: value })}
          />
          <Textfield
            style={styles.field}
            placeholder="Contraseña"
            value={this.state.password}
            onChange={(value) => this.setState({ password: value })}
            secureEntry
          />
          <Textfield
            placeholder="Confirma tu contraseña"
            value={this.state.confirmPassword}
            onChange={(value) => this.setState({ confirmPassword: value })}
            secureEntry
          />

          <Button
            style={styles.button}
            onPress={() => this.registerUser()}
            block
          >
            Registrarme
          </Button>
        </View>
      </View>
    );
  }
}

export default Signup;
