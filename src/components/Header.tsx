import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import color from '../utils/color';

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.textHeader} testID="text-country-directory">
                Country Directory
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: color.COLOR_PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textHeader: {
        color: color.COLOR_WHITE,
        fontSize: 20,
        fontWeight: 'bold'
    },
});

export default Header;