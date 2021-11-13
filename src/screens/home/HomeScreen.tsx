import React, { FC, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// 
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
//
import { Props } from './types';
import styles from './styles';
// 
import { HEIGHT, WIDTH } from '../../common/constants';
import langauges from '../../common/langauges';
import HomeCard from '../../components/homeCard/HomeCard';
import TransactionCard from '../../components/transactionCard/TranscationCard';
import { theme } from '../../common/theme/theme';


const Home: FC<Props> = ({
    navigation
}) => {
    const transactions = useAppSelector(state => state.mainSlice.transactions)
    const balance = useAppSelector(state => state.mainSlice.balance)
    const expenses = useAppSelector(state => state.mainSlice.expenses)
    const dispatch = useAppDispatch()

    useEffect(() => {
        console.log(transactions);
    }, [dispatch])


    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={{
                position: "absolute",
                backgroundColor: theme.Colors.primary,
                height: HEIGHT / 4,
                width: WIDTH,
                borderBottomRightRadius: 50,
                borderBottomLeftRadius: 50
            }}>

            </View>

            <SafeAreaView >
                <View style={{ height: 50 }}>
                    <Text style={[{ ...theme.Fonts?.Main.header, color: "white" }]}>{langauges.welcome}</Text>
                </View>
                <HomeCard
                    title='Your balance'
                    balance={balance}
                    startIncome={1200}
                    expenses={expenses}
                />

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={transactions}
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
                    ListHeaderComponent={<Text style={{ ...theme.Fonts?.Main.header }}>{langauges.tranHistory}</Text>}
                />
            </SafeAreaView>
        </View >
    )
}

export default Home;



