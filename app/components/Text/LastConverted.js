import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import moment from 'moment';

import styles from './styles';

const LastConverted = ({
    base, date, quote, conversionRate,
}) => {
    const lastConvertedText = `1 ${base} = ${conversionRate} ${quote} as of ${moment(date).format('MMMM D, YYYY')}`;
    return (
      <Text style={styles.smallText}>
        {lastConvertedText}
      </Text>
    );
};

LastConverted.propTypes = {
    date: PropTypes.object,
    base: PropTypes.string,
    quote: PropTypes.string,
    conversionRate: PropTypes.number,
};

export default LastConverted;
