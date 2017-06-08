import React from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Font } from 'exponent';
import { BackgroundImage } from './common/backgroundImage';

export class Learning extends React.Component {

//     componentDidMount() {
//     Font.loadAsync({
//       'times-new-roman': require('../assets/fonts/Times New Roman.ttf'),
//     });
//   }


    render() {
        return (
            <View style={styles.viewStyle}>
                <Text>
                    Content
                </Text>
            </View>
        )
    }
}

const styles = {
    viewStyle: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange'
    },
    textStyle : {
        fontSize: 30,
        color: 'white',
        // fontFamily: 'times-new-roman'
    }
}