import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// 
import Constants, { HEIGHT } from '../../common/constants';
import { theme } from '../../common/theme/theme';

interface Props {
    title: string;
    iconName: string;

}

const BackHeader: FC<Props> = ({ title, iconName }) => {
    const naviation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => naviation.goBack()}>
                <Icon name={iconName} size={Constants.ResponsiveSize.f25} />
            </TouchableOpacity>
            <View style={{ flex: 2, alignItems: 'center' }}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ flex: 1 }}></View>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        marginVertical: Constants.ResponsiveSize.f10

    },
    title: {
        ...theme.Fonts?.Main.header
    }

})
export default BackHeader;