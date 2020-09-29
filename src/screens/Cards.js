import React from 'react';
import { View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import axios from '~/plugins/axios';

import getPayments from '~/redux/actions/getPayments';
import getImgTypeCards from '~/redux/actions/getImgTypeCards';
import deletePayment from '~/redux/actions/deletePayment';

import layout from '~/scss/layout/default.scss';
import styles from '~/scss/screens/cards.scss';

import { Appbar, User, Text, Button, Card } from '~/components';

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  UNSAFE_componentWillMount() {
    Promise.all([axios.get('/payments'), axios.get('/imgTypeCard')])
      .then((res) => {
        let userPayments = res[0].data.filter(
          (item) => item.user === this.props.user.id,
        );
        this.props.getPayments(userPayments);
        this.props.getImgTypeCards(res[1].data);
      })
      .catch(console.error);

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
    if (this.props.imgTypeCards.length > 0) {
      return this.props.payments.map((payment) => {
        let imgCard = this.props.imgTypeCards.find(
          (card) => payment.type === card.id,
        );

        let card = {
          imgCard: imgCard.img,
          numberCard: payment.numberCard,
        };

        return (
          <Card
            style={styles.card}
            key={payment.id}
            item={card}
            onDelete={() => this.deleteCard(payment.id)}
          />
        );
      });
    }
  };

  deleteCard = (paymentId) => {
    axios
      .delete(`/payments/${paymentId}`)
      .then(({ data }) => {
        this.props.deletePayment(paymentId);
      })
      .catch(console.error);
  };

  render() {
    return (
      <View>
        <Appbar style={layout.appbar} />

        <User user={this.props.user} />

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
            Agregar nueva tarjeta
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
    deletePayment: (paymentId) => dispatch(deletePayment(paymentId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
