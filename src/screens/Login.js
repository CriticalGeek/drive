import React from 'react';
import { Image, View, Alert } from 'react-native';
import { withRouter } from 'react-router-native';
import { connect } from 'react-redux';
import axios from '~/plugins/axios';

import getUser from '~/redux/actions/getUser';

import layout from '~/scss/layout/login.scss';
import styles from '~/scss/screens/login.scss';

import { Heading, Text, Textfield, Button, Link } from '~/components';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '1',
      password: '1',
    };

    this.resetState = this.resetState.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }

  resetState() {
    this.setState({
      email: '',
      password: '',
    });
  }

  validateUser() {
    if (this.state.email && this.state.password) {
      axios
        .get('/users')
        .then(({ data }) => {
          let user = data.find((item) => item.email === this.state.email);

          if (user) {
            if (user.password === this.state.password) {
              this.resetState();
              this.props.getUser(user);
              this.props.history.push('/tickets');
            } else {
              Alert.alert('Incorrect password');
            }
          } else {
            Alert.alert('user not found');
          }
        })
        .catch(console.error);
    }
  }

  render() {
    return (
      <View style={layout.login}>
        <Image
          style={styles.ilustration}
          source={require('~/assets/img/car.png')}
        />

        <Heading>Bienvenido a DRIVE</Heading>
        <Text>La forma inteligente de manejar tu auto</Text>

        <Textfield
          value={this.state.email}
          style={styles.field}
          placeholder="Correo electrónico"
          onChange={(value) => this.setState({ email: value })}
        />
        <Textfield
          value={this.state.password}
          placeholder="Contraseña"
          onChange={(value) => this.setState({ password: value })}
          secureEntry
        />

        <Button style={styles.button} onPress={() => this.validateUser()} block>
          Iniciar sesión
        </Button>
        <Link to="/signup">¿Nuevo aquí? Registrate gratis</Link>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => dispatch(getUser(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
