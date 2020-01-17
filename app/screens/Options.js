import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ScrollView, StatusBar, Platform, Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ListItem, Separator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFICX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
    handleThemesPress = () => {
        const { navigation } = this.props;
        navigation.navigate('Themes');
    };

    handleSitePress = () => {
        const { alertWithType } = this.props;
        Linking.openURL('http://fixer.io').catch(() => alertWithType('error', 'Sorry!', "Fixer.io can't be opened right now"));
    };

    render() {
        return (
          <ScrollView>
            <StatusBar translucent={false} barStyle="default" />
            <ListItem
              text="Themes"
              onPress={this.handleThemesPress}
              customIcon={<Icon name={`${ICON_PREFICX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />}

            />
            <Separator />
            <ListItem
              text="Fixer.io"
              onPress={this.handleSitePress}
              customIcon={<Icon name={`${ICON_PREFICX}-link`} color={ICON_COLOR} size={ICON_SIZE} />}
            />
            <Separator />
          </ScrollView>
        );
    }
}

Options.propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
};

export default connectAlert(Options);
