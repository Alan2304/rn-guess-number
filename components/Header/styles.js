import { StyleSheet, Platform } from 'react-native';
import Colors from '../../constants/colors';

const styles = StyleSheet.create({
    headerBase: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: "center",
        justifyContent: "center",
        
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: Colors.primary,
    },
    headerTitle: {
        color:  Platform.OS === 'ios' ? Colors.primary : 'white',
        fontSize: 18,
        fontFamily: 'open-sans-bold'
    },
});

export default styles