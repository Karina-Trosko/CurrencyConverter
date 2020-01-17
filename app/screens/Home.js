import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
  handlePressBaseCurrency = () => {
      const { navigation } = this.props;
      navigation.navigate('CurrencyList', { title: 'Base currency', type: 'base' });
  };

  handlePressQuoteCurrency = () => {
      const { navigation } = this.props;
      navigation.navigate('CurrencyList', { title: 'Quote currency', type: 'quote' });
  };

  handleTextChenge = (amount) => {
      const { dispatch } = this.props;
      dispatch(changeCurrencyAmount(amount));
  };

  handleSwapCurrency = () => {
      const { dispatch } = this.props;
      dispatch(swapCurrency());
  };

  handleSettingsOnPress = () => {
      const { navigation } = this.props;
      navigation.navigate('Options');
  };

  render() {
      const {
          conversionRate, amount, isFetching, lastConvertedDate,
      } = this.props;
      let quotePrice = (amount * conversionRate).toFixed(2);
      if (isFetching) {
          quotePrice = '...';
      }

      const { baseCurrency, quoteCurrency, primaryColor } = this.props;
      return (
        <Container backgroundColor={primaryColor}>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header onPress={this.handleSettingsOnPress} />
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleTextChenge}
            textColor={primaryColor}
          />
          <InputWithButton
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            editable={false}
            value={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            base={baseCurrency}
            quote={quoteCurrency}
            date={lastConvertedDate}
            conversionRate={conversionRate}
          />
          <ClearButton
            text="Reverse Currencies"
            onPress={this.handleSwapCurrency}
          />
        </Container>
      );
  }
}

Home.propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConvertedDate: PropTypes.object,
    primaryColor: PropTypes.string,
};

const mapStateToProps = (state) => {
    const { baseCurrency, quoteCurrency, amount } = state.currencies;
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    return {
        baseCurrency,
        quoteCurrency,
        amount,
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        lastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor: state.theme.primaryColor,
    };
};

export default connect(mapStateToProps)(Home);
