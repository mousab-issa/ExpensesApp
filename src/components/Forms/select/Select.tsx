import React, { FC, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Constants from '../../../common/constants';
import { theme } from '../../../common/theme/theme';




export interface Selectitem {
    key: string;
    title: string;
    selected: boolean;
    color?: string;
    onPress?: any;
}

interface Props {
    label: string;
    items?: Selectitem[],
    onPress: Function
}


const SelecteItem: FC<Selectitem> = ({ title, selected, color, onPress }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: "center" }}>

            <View style={{ flex: .5 }}>
                <View style={[styles.indicator, { backgroundColor: color ? color : theme.Colors.primary }]} />
            </View>
            <View style={{ flex: 4 }}>
                <Text>{title}</Text>
            </View>
            <View style={{ flex: .5 }}>
                <View style={{
                    height: 25,
                    width: 25,
                    borderRadius: 30 / 2,
                    borderColor: !selected ? 'grey' : theme.Colors.primary,
                    borderWidth: 1.5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: 15,
                        width: 15,
                        borderRadius: 15 / 2,
                        backgroundColor: !selected ? 'white' : theme.Colors.primary
                    }}>
                    </View>
                </View>
            </View>
        </View>
    )
}
const SelectInput: FC<Props> = ({ items, label, onPress }) => {
    const [Selected, setSelected] = useState<Selectitem | undefined>(undefined);

    const onItemSelected = (item: Selectitem) => {
        setSelected(item)
        onPress(item);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.buttonText}>{label}</Text>

            <View style={styles.itemsContainer}>
                {items?.map((item, i) => {
                    return (
                        <TouchableOpacity key={i} onPress={() => onItemSelected(item)} >
                            <SelecteItem
                                key={item.key}
                                selected={Selected?.key === item.key}
                                title={item.title}
                                color={item.color} />
                            <View style={{ marginVertical: 20, height: 2, backgroundColor: '#FAFAFA' }} />
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )

}
export default SelectInput;

const styles = StyleSheet.create({
    container: {
        marginVertical: Constants.ResponsiveSize.f10
    },
    itemsContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        borderColor: theme.Colors.inactive,
        borderWidth: 1.5,
        minHeight: Constants.ResponsiveSize.f100,
        width: '100%',
        padding: Constants.ResponsiveSize.f15,
        marginVertical: Constants.ResponsiveSize.f10,
    },
    buttonText: {
        ...theme.Fonts?.Main.title,
        paddingHorizontal: Constants.ResponsiveSize.f5,
    },
    indicator: {
        height: Constants.ResponsiveSize.f30,
        width: Constants.ResponsiveSize.f10,
        borderRadius: 5
    }
})
