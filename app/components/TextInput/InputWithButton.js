import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput,
} from 'react-native';
import color from 'color';

import styles from './styles';

const InputWithButton = (props) => {
    const {
        onPress,
        buttonText,
        editable = true,
        onChangeText,
        defaultValue,
        keyboardType,
        value,
        textColor,
    } = props;

    const underlayColor = color(styles.$buttonBackgroundColorBase)
        .darken(styles.$buttonBackgroundColorModifier);

    const containerStyles = [styles.container];
    if (editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    const buttonTextStyle = [styles.buttonText];
    if (textColor) {
        buttonTextStyle.push({ color: textColor });
    }

    return (
      <View style={containerStyles}>
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={onPress}
          underlayColor={underlayColor}
        >
          <Text style={buttonTextStyle}>{buttonText}</Text>
        </TouchableHighlight>
        <View style={styles.border} />
        <TextInput
          style={styles.input}
          editable={editable}
          onChangeText={onChangeText}
          defaultValue={defaultValue}
          keyboardType={keyboardType}
          value={value}
        />
      </View>
    );
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    onChangeText: PropTypes.func,
    keyboardType: PropTypes.string,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
    textColor: PropTypes.string,
};

export default InputWithButton;
