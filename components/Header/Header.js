import React from 'react';
import { View, Platform } from 'react-native';

import TextTitle from '../TitleText/TitleText';
import styles from './styles';

const Header = props => {
    return (
        <View style={{
            ...styles.headerBase, 
            ...Platform.select({
                    ios: styles.headerIOS, 
                    android: styles.headerAndroid
                })
            }}>
            <TextTitle style={styles.headerTitle}>{props.title}</TextTitle>
        </View>
    )
}

export default Header