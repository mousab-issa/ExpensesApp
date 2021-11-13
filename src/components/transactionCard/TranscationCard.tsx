import moment from 'moment';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
// 
import Constants, { HEIGHT } from '../../common/constants';
import { TransactionsType } from '../../common/enums';
import { theme } from '../../common/theme/theme';
import { Transaction } from '../../redux/main/types';




const TransactionCard: FC<Transaction> = ({ id, date, description, title, type, catagory, amount }) => (
    <View style={styles.container}>
        <View style={{ flex: .5, }}>
            <View style={[styles.indicator, { backgroundColor: type === TransactionsType.Expenses ? theme.Colors.error : theme.Colors.active }]} />
        </View>

        <View style={{ flex: 2, }}>
            <View style={{
                backgroundColor: "white",
                height: '100%',
                width: '50%',
                borderRadius: 10,
                shadowColor: "grey",
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 1.5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Icon
                    name={type === TransactionsType.Expenses ? "arrow-left" : "arrow-right"}
                    size={Constants.ResponsiveSize.f25}
                    color={type === TransactionsType.Expenses ? theme.Colors.error : theme.Colors.active}
                />
            </View>
        </View>

        <View style={{
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'space-between',
        }}>
            <Text style={
                [{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginVertical: Constants.ResponsiveSize.f5
                },
                {
                    color: type === TransactionsType.Expenses ? theme.Colors.error : theme.Colors.active
                }
                ]}>
                {type === TransactionsType.Expenses ? '-' : '+'} {amount}$
            </Text>
            <Text numberOfLines={2} style={{
                ...theme.Fonts?.Main.button,
                color: theme.Colors.borders
            }}>{description}</Text>
        </View>
        <View style={{ position: 'absolute', right: 20, top: 10 }}>
            <Text style={styles.date}>{moment(date).format('MM/DD/YYYY')}</Text>
        </View>
    </View >
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: HEIGHT / 10,
        flexDirection: 'row',
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#D6D5D5',
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'space-around',
        padding: 10
    },
    indicator: {
        height: '100%',
        width: 10,
        backgroundColor: "#8E20E1",
        borderRadius: 5
    },
    date: {
        ...theme.Fonts?.Main.subtitles,

        color: 'grey'
    }
})
export default TransactionCard;