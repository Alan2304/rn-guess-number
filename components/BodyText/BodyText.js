import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styles from './styles';

const BodyText = props => <Text style={{...styles.body, ...props.style}}>{props.children}</Text>



export default BodyText;