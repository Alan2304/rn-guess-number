import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styles from './styles';

const TitleText = props => <Text style={{...props.style, ...styles.title}}>{props.children}</Text>

export default TitleText;