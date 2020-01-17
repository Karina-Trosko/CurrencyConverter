import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    ImageBackground,
    Keyboard,
    Platform,
    Animated,
} from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
    constructor(props) {
        super(props);

        this.containerImageWight = new Animated.Value(styles.$largeContainerSize);
        this.imageWidth = new Animated.Value(styles.$largeImageSize);
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardShowListener = Keyboard.addListener(`keyboard${name}Show`, this.keyboardShow);
        this.keyboardHideListener = Keyboard.addListener(`keyboard${name}Hide`, this.keyboardHide);
    }

    componentWillUnmount() {
        this.keyboardHideListener.remove();
        this.keyboardShowListener.remove();
    }

  keyboardShow = () => {
      Animated.parallel([
          Animated.timing(this.containerImageWight, {
              toValue: styles.$smallContainerSize,
              duration: ANIMATION_DURATION,
          }),

          Animated.timing(this.imageWidth, {
              toValue: styles.$smallImageSize,
              duration: ANIMATION_DURATION,
          }),
      ]).start();
  };

  keyboardHide = () => {
      Animated.parallel([
          Animated.timing(this.containerImageWight, {
              toValue: styles.$largeContainerSize,
              duration: ANIMATION_DURATION,
          }),

          Animated.timing(this.imageWidth, {
              toValue: styles.$largeImageSize,
              duration: ANIMATION_DURATION,
          }),
      ]).start();
  };

  render() {
      const { tintColor } = this.props;
      const containerImageStyle = [styles.animatedImage,
          { width: this.containerImageWight, height: this.containerImageWight }];
      const imageStyle = [styles.image, { width: this.imageWidth }, { tintColor } || null];
      return (
        <View style={styles.container}>
          <Animated.View style={containerImageStyle}>
            <ImageBackground
              resizeMode="contain"
              style={styles.containerImage}
              source={require('./images/background.png')}
            >
              <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
            </ImageBackground>
          </Animated.View>
          <Text style={styles.text}>Currency Converter</Text>
        </View>
      );
  }
}
Logo.propTypes = {
    tintColor: PropTypes.string,
};

export default Logo;
