import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

import styles from './styles';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;    
    }

    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
}

export default MainButton;