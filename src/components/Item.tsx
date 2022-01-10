import React from 'react';
import { View } from 'react-native';
import { List } from 'react-native-paper';
import { CountryItem } from '../interfaces/CountryItem';

const Item = (props : CountryItem) => {
    return (
        <View>
            <List.Item
                title={props.name}
                description={props.code}
                left={props => <List.Icon {...props} icon={'earth'} />}
            />
        </View>
    );
};

export default Item;