import React, { FC, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import moment from 'moment';
// 
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
//
import { Props } from './types';
import styles from './styles';
// 
import langauges from '../../common/langauges';
import BackHeader from '../../components/backHeader/backHeader';
import { theme } from '../../common/theme/theme';


import TransactionCard from '../../components/transactionCard/TranscationCard';
import DateButtonGroup, { DateItem } from '../../components/dateButton/dateButton';

const StatScreen: FC<Props> = ({ navigation }) => {
    const transactions = useAppSelector(state => state.mainSlice.transactions);

    const [Dates, setDates] = useState<DateItem[]>([])
    const [filtredTransactions, setFilteredTransactions] = useState<any>([]);

    const filterTransactions = (date: DateItem) => {
        setFilteredTransactions(transactions)
    }

    const getDates = () => {
        transactions?.forEach(item => {
            const DateExists = Dates.some(e => e.day === moment(item.date).format("D") && e.month === moment(item.date).format("MMM"));
            if (!DateExists) {
                setDates((dates) => [...dates, {
                    day: moment(item.date).format("D"),
                    month: moment(item.date).format("MMM")
                }
                ])
            }
        })
    }

    useEffect(() => {
        getDates();
    }, [transactions])

    return (
        <View style={styles.container}>
            <SafeAreaView >
                <BackHeader iconName={'arrow-left'} title={langauges.history} />

                {Dates.length > 0 && <Text style={{ ...theme.Fonts?.Main.header, marginHorizontal: 20 }}>{langauges.date}</Text>}
                <DateButtonGroup dates={Dates} onPress={(date: DateItem) => { filterTransactions(date) }} />
                {filtredTransactions.length > 0 &&
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={filtredTransactions}
                        style={{ marginTop: 50, height: '60%' }}
                        keyExtractor={item => item.id}
                        renderItem={(item) =>
                            <TransactionCard
                                amount={item?.item.amount}
                                type={item?.item.type}
                                description={item?.item.description}
                                id={item.item.id}
                                title={item.item.title}
                                date={item.item.date}
                                catagory={item.item.catagory}
                            />
                        }
                        ListHeaderComponent={<Text style={{ ...theme.Fonts?.Main.header, marginHorizontal: 20 }}>{langauges.transactions}</Text>}
                    />}
            </SafeAreaView>
        </View >
    )
}

export default StatScreen;



