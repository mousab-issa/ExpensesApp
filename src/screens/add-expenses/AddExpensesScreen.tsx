import React, { FC, useState, useEffect } from 'react';
import { View, ScrollView, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import moment from 'moment';
// 
import { useAppDispatch } from '../../redux/hooks';
//
import { Props } from './types';
import styles from './styles';
// 
import Constants from '../../common/constants';
import langauges from '../../common/langauges';
import BackHeader from '../../components/backHeader/backHeader';
import FormTextInput from '../../components/Forms/text-input/FormTextInput';
import FormButton from '../../components/Forms/form-button/FormButton';
import SelectInput, { Selectitem } from '../../components/Forms/select/Select';
import { theme } from '../../common/theme/theme';
import { addTransaction } from '../../redux/main/main';
import { Transaction } from '../../redux/main/types';
import { TransactionsType } from '../../common/enums';
//


const data: Selectitem[] = [
    {
        key: "Entertaiment",
        title: 'Entertaiment ',
        selected: false,
        color: 'red',
    },
    {
        key: "Social",
        title: 'Social ',
        selected: true,
        color: 'blue',
    },
    {
        key: "Beauty",
        title: 'Beauty ',
        selected: false,
        color: 'yellow',
    },
    {
        key: "Other",
        title: 'Other ',
        selected: false,
        color: 'purple',
    },
];


const types: Selectitem[] = [
    {
        key: TransactionsType.Income,
        title: TransactionsType.Income,
        selected: false,
        color: 'pink',
    },
    {
        key: TransactionsType.Expenses,
        title: TransactionsType.Expenses,
        selected: true,
        color: 'red',
    },

];


const AddExpenses: FC<Props> = ({
    navigation
}) => {

    // States 
    const [title, setTitle] = useState<string | undefined>(undefined);
    const [catagory, setCatagory] = useState<Selectitem | undefined>(undefined);
    const [amount, setAmount] = useState<number | undefined>(undefined);
    const [type, setType] = useState<TransactionsType | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [isActive, setActive] = useState<boolean>(false);
    const [error, setError] = useState<[]>([])

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!title || !catagory || !amount || !type) {
            setActive(false);
        } else {
            setActive(true)
        }
    }, [title, catagory, amount, type])


    // On Saving the transations
    const onSavePressed = () => {
        const transaction: Transaction = {
            id: Math.random().toString(),
            title: title || '',
            amount: amount || 0,
            catagory: catagory?.title || '',
            date: moment().toISOString(),
            type: type || TransactionsType.Expenses,
            description: title || '',
        }
        dispatch(addTransaction(transaction));
        navigation.goBack();
    }


    return (
        <View style={styles.container}>
            <SafeAreaView style={{ flex: 1 }}>
                <BackHeader title={langauges.addTransaction} iconName='close' />
                {/* Form */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Title */}
                    <FormTextInput label='Title :' onTextChange={(text) => setTitle(text)} />

                    <SelectInput
                        label='Catagorey : '
                        items={data}
                        onPress={(item: Selectitem) => setCatagory(item)}
                    />

                    <FormTextInput label='Amount:' onTextChange={(text) => setAmount(parseInt(text))} type='number' />

                    <FormTextInput label='Description:' onTextChange={(text) => setDescription(text)} />

                    <SelectInput
                        label='Type: '
                        items={types}
                        onPress={(item: Selectitem) => setType(item.title)} />

                </ScrollView>

                <View style={{ position: 'absolute', bottom: Constants.ResponsiveSize.f20, width: '100%' }}>
                    <FormButton
                        disbaled={!isActive}
                        onPress={onSavePressed}
                        loading={false} title='save'
                        backgroundColor={theme.Colors.primary} />
                </View>
            </SafeAreaView>
        </View >
    )
}

export default AddExpenses;



