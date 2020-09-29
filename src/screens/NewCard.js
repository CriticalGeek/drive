import React from 'react';
import { View, BackHandler, Alert } from 'react-native';
import { connect } from 'react-redux';
import axios from '~/plugins/axios';

import getPayments from '~/redux/actions/getPayments';
import getImgTypeCards from '~/redux/actions/getImgTypeCards';
import addPayment from '~/redux/actions/addPayment';

import layout from '~/scss/layout/login.scss';
import styles from '~/scss/screens/newcard.scss';

import { Appbar, Heading, Textfield, Button, CardPreview } from '~/components';

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
      type: 'visa',
      img: '',
    };

    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  UNSAFE_componentWillMount() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick,
    );

    let card = this.props.imgTypeCards.find(
      (item) => item.type === this.state.type,
    );

    this.setState({
      img: card.img,
    });
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

  updateCardType = (value) => {
    this.setState({ type: value });

    let card = this.props.imgTypeCards.find((item) => item.type === value);

    if (card) {
      this.setState({ img: card.img });
    }
  };

  submitCard = () => {
    if (this.state.number && this.state.name) {
      axios
        .get('/payments')
        .then(({ data }) => {
          let paymentsLenght = data.length - 1;
          let newId = paymentsLenght > 0 ? data[paymentsLenght].id + 1 : 1;
          let typeId = 1;

          let types = this.props.imgTypeCards.find(
            (item) => item.type === this.state.type,
          );

          if (types) {
            typeId = types.id;
          }

          let newPayment = {
            id: newId,
            user: this.props.user.id,
            numberCard: this.state.number,
            nameCard: this.state.name,
            type: typeId,
          };

          axios
            .post('/payments', newPayment)
            .then(({ data }) => {
              this.props.addPayment(newPayment);
              this.props.history.goBack();
            })
            .catch(console.error);
        })
        .catch(console.error);
    } else {
      Alert.alert('Campos no validos');
    }
  };

  render() {
    return (
      <View>
        <Appbar hasBackward />

        <View style={layout.login}>
          <Heading style={styles.heading}>Agrega una nueva tarjeta</Heading>

          <CardPreview style={styles.cardpreview} info={this.state} />

          <Textfield
            style={styles.field}
            placeholder="4 digitos de tarjeta"
            value={this.state.number}
            onChange={(value) => this.setState({ number: value })}
          />
          <Textfield
            style={styles.field}
            value={this.state.name}
            placeholder="Nombre del titular"
            onChange={(value) => this.setState({ name: value })}
          />
          <Textfield
            style={styles.field}
            value={this.state.type}
            placeholder="Tipo de tarjeta"
            onChange={(value) => this.updateCardType(value)}
          />

          <Button onPress={() => this.submitCard()} block>
            Agregar tarjeta
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    payments: state.payments,
    imgTypeCards: state.imgTypeCards,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPayments: (tickets) => dispatch(getPayments(tickets)),
    getImgTypeCards: (cards) => dispatch(getImgTypeCards(cards)),
    addPayment: (card) => dispatch(addPayment(card)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
