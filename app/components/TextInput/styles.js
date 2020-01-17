import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    $buttonBackgroundColorBase: '$white',
    $buttonBackgroundColorModifier: 0.1,

    container: {
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 11,
        marginBottom: 11,
    },
    containerDisabled: {
        backgroundColor: '$lightGray',
    },
    buttonContainer: { // buttonContainer
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$white',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue',
    },
    input: {
        height: '100%',
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '$inputText',
    },
    border: {
        height: '100%',
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
});
