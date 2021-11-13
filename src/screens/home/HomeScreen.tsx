import React, { FC, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
// 
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
//
import { Props } from './types';
import styles from './styles';
// 
import Constants, { HEIGHT, WIDTH } from '../../common/constants';
import langauges from '../../common/langauges';
import HomeCard from '../../components/homeCard/HomeCard';
import TransactionCard from '../../components/transactionCard/TranscationCard';
import { theme } from '../../common/theme/theme';
import { removeAsyncItem } from '../../helpers/common';
import { clearState } from '../../redux/auth/auth';


const Home: FC<Props> = ({
    navigation
}) => {
    const transactions = useAppSelector(state => state.mainSlice.transactions)
    const username = useAppSelector(state => state.authSlice.user.name)
    const balance = useAppSelector(state => state.mainSlice.balance)
    const expenses = useAppSelector(state => state.mainSlice.expenses)
    const dispatch = useAppDispatch()


    const Logout = async () => {
        try {
            await removeAsyncItem('USER_TOKEN');
            return dispatch(clearState());
        } catch (e) { }
    }

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
                <View style={{ height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <Text style={[{ ...theme.Fonts?.Main.header, color: "white" }]}>{langauges.welcome} {username}</Text>
                    <TouchableOpacity onPress={Logout}>
                        <Icon name="power-off" size={Constants.ResponsiveSize.f20} color="white" />
                    </TouchableOpacity>
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



