import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextTitle from '../TitleText/TitleText';
import styles from './styles';

const Header = props => {
    return (
        <View style={styles.header}>
            <TextTitle style={styles.headerTitle}>{props.title}</TextTitle>
        </View>
    )
}

export default Header