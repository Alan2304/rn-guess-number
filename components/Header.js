import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import TextTitle from '../components/TitleText';
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <TextTitle style={styles.headerTitle}>{props.title}</TextTitle>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center"
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    }
});

export default Header