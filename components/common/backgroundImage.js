import React from 'react';
import {
    Text,
    Image,
    View
} from 'react-native';

export class BackgroundImage extends React.Component{
    render(){
        return (
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            style={styles.backgroundImage}>
                {this.props.children}
            </Image>
        )
    }
}

const styles ={
    backgroundImage: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    }
};