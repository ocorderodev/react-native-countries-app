import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Country } from '../interfaces/Country';
import { CountryForm } from '../interfaces/CountryForm';
import color from '../utils/color';
import { _searchCountries } from '../utils/countrySlice';
import { useAppDispatch } from '../utils/hooks';

const Form = ( props : CountryForm ) => {

    const [ name, setName ] = useState("");

    const _setName = (e : string) => setName(e);

    const dispatch = useAppDispatch();

    const _searchCountry = () => {
        const _countries = props.countries.countries;
        const find = _countries.filter((e: any) => e.name == name);
        dispatch(_searchCountries({ "countries": find }));
    }

    return (
        <View style={styles.row}>
            <TextInput
                label={`${props.title}`}
                style={styles.input}
                onChange={(e) => _setName(e.nativeEvent.text)}
            />
            <View style={styles.buttonRight}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => _searchCountry()}
                >
                    <View>
                        <Text style={styles.buttonText}>
                            {props.titleButton}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingTop: 10
    },

    input: {
        backgroundColor: color.COLOR_WHITE,
        width: '60%',
        height: 50,
        fontSize: 10
    },

    buttonRight: {
        width: '40%',
        paddingTop: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        backgroundColor: color.COLOR_PRIMARY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 20
    },

    buttonText: {
        color: 'white'
    }
});

export default Form;