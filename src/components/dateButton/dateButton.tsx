import React, { FC, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Constants from '../../common/constants';
import { theme } from '../../common/theme/theme';


export interface DateItem {
    day: string;
    month: string;
    onPress?: any;
    selected?: boolean;
}

const DateButton: FC<DateItem> = ({ day, month, onPress, selected }) => {

    return (
        <TouchableOpacity onPress={() => onPress?.({ day, month })}>
            <View style={{
                backgroundColor: selected ? theme.Colors.primary : 'white',
                height: Constants.ResponsiveSize.f120,
                width: Constants.ResponsiveSize.f100,
                borderRadius: Constants.ResponsiveSize.f30,
                shadowColor: "grey",
                shadowOffset: {
                    width: 0,
                    height: 9,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4.65,
                elevation: 6,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
                borderWidth: 1,
                borderColor: theme.Colors.borders
            }}>

                <Text style={{ ...theme.Fonts?.Main.header, color: selected ? "white" : 'black', marginVertical: 5 }}>{day}</Text>
                <Text style={{ ...theme.Fonts?.Main.subtitles, color: selected ? "white" : 'black', fontWeight: 'normal' }}>{month}</Text>
            </View>
        </TouchableOpacity >
    )
}

const DateButtonGroup: FC<{ dates: DateItem[]; onPress: any }> = ({ dates, onPress }) => {
    const [SelectedDate, setSelectedDate] = useState<Date>();

    const OnDateSecltected = (date: Date) => {
        setSelectedDate(date)
        onPress(date);
    }

    return <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ padding: 20 }}>
        {
            dates.map((date, i) => {
                return <DateButton day={date.day} month={date.month} key={i} selected={JSON.stringify(date) === JSON.stringify(SelectedDate)} onPress={(item: Date) => { OnDateSecltected(item) }} />
            })
        }
    </ScrollView>
}

export default DateButtonGroup


