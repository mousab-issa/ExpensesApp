import React, { FC } from 'react'
import { View, Text, StyleSheet } from "react-native";
// 
import Constants, { HEIGHT, WIDTH } from '../../common/constants';
import langauges from '../../common/langauges';
import { theme } from '../../common/theme/theme';

export interface Props {
    title: string,
    balance: number;
    startIncome?: number;
    expenses: number;
}

const HomeCard: FC<Props> = ({ title, balance, startIncome, expenses }) => {
    return (
        <View style={styles.container}>
            {/* Title */}
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={
                    [styles.title,
                    {
                        color: theme.Colors.primary,
                        marginVertical: Constants.ResponsiveSize.f5
                    }
                    ]}>{title}</Text>
                <Text style={styles.title}>$ {balance}</Text>
            </View >

            {/* Line */}
            < View style={{ height: 1, backgroundColor: '#D6D5D5', marginVertical: Constants.ResponsiveSize.f10 }} />

            {/* Total */}
            {/* < View style={{ flex: 1, flexDirection: 'column' }}>
                < View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={styles.column}>
                        <Text style={[styles.subtitle, { color: theme.Colors.iconBackground }]}>{langauges.startIncome}</Text>
                        <Text style={[styles.title, { color: theme.Colors.active }]}>$ {startIncome}</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={[styles.subtitle, { color: theme.Colors.error }]}>{langauges.expenses}</Text>
                        <Text style={[styles.title, { color: theme.Colors.error }]}>$ {expenses}</Text>
                    </View>
                </View >
            </View > */}

            <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={
                    [styles.title,
                    {
                        color: theme.Colors.error,
                        marginVertical: Constants.ResponsiveSize.f5
                    }
                    ]}>{langauges.expenses}</Text>
                <Text style={[styles.title, { color: theme.Colors.error }]}>$ {expenses}</Text>
            </View >

        </View >)
};

const styles = StyleSheet.create(
    {
        container: {
            width: WIDTH - Constants.ResponsiveSize.f30,
            height: HEIGHT / 5,
            backgroundColor: 'white',
            alignSelf: "center",
            borderRadius: 20,
            shadowColor: "grey",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 1.5,
            flexDirection: 'column',
            padding: 20
        },
        title: {
            ...theme.Fonts?.Main.title
        },
        column: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around'
        },
        subtitle: {
            ...theme.Fonts?.Main.button
        }

    }
)
export default HomeCard;