import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import { CountryItem } from '../interfaces/CountryItem';
import { Country } from '../interfaces/Country';

import color from '../utils/color';
import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../utils/apolloQuery';

import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { _getCountries, _restoreCountries } from '../utils/countrySlice';

import Header from '../components/Header';
import Form from '../components/Form';
import Item from '../components/Item';

const CountryScreen = () => {

    const [show, setShow] = useState(false);
    let country: Country = useAppSelector(state => state.country.value);
    let countryBackup = useAppSelector(state => state.country.countries);
    let state = useAppSelector(state => state.country.search);
    const dispatch = useAppDispatch();
    console.log(state);

    const { data, loading, error } = useQuery(GET_COUNTRIES);

    const _showCountries = () => { setShow(true); dispatch(_getCountries(data)); };

    const _restore = () => dispatch(_restoreCountries())

    if (loading) return <Text>Loading...</Text>

    return (
        <View style={styles.body}>
            <Header />
            {
                (show)
                    ?
                    <View style={styles.container}>
                        <Form
                            title={"Name country"}
                            titleButton={"Search"}
                            countries={countryBackup} />

                        <Text style={styles.subTitle}>
                            Choose Country
                        </Text>

                        {(country) ? 
                        <>
                            {(country.countries.length > 0)
                            ?
                            <>
                            {
                                (state)
                                ?
                                <>
                                {country.countries.map((e: CountryItem, i: any) => (
                                    <Item key={i} name={e.name} code={e.code} />
                                ))}

                                <View>
                                    <Button
                                        onPress={_restore}
                                        title={"Restaurar datos"}
                                    />
                                </View>
                                </>
                                :
                                country.countries.map((e: CountryItem, i: any) => (
                                    <Item key={i} name={e.name} code={e.code} />
                                ))
                            }
                            </>
                            :
                            <View>
                                <Text>No hay resultados</Text>
                                <Button
                                    onPress={_restore}
                                    title={"Mostrar datos"}
                                />
                            </View>}
                        </>
                        : <></>}

                    </View>
                    :
                    <View>
                        <Button onPress={_showCountries} title='Show' />
                    </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: color.COLOR_WHITE
    },

    subTitle: {
        fontSize: 15,
        paddingTop: 20
    },

    container: {
        paddingLeft: 20,
        paddingRight: 15
    }
});

export default CountryScreen;