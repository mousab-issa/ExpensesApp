import React, { FC } from 'react'
import { View, Text, StyleSheet, GestureResponderEvent, TouchableOpacity, ActivityIndicator } from 'react-native'
import Constants from '../../../common/constants'
import { theme } from '../../../common/theme/theme'

interface Props {
    onPress: (event: GestureResponderEvent) => void
    title: string;
    disbaled?: boolean;
    loading?: boolean;
    iconName?: string;
    backgroundColor: string;
}

const FormButton: FC<Props> = ({ onPress, title, loading, iconName, backgroundColor, disbaled = false }) => {

    return (
        <TouchableOpacity
            disabled={loading || disbaled}
            onPress={onPress}
            style={[styles.button, { backgroundColor: disbaled ? 'grey' : theme.Colors.primary }]}
        >
            {
                loading ? <ActivityIndicator color="white" /> :
                    <Text style={styles.buttonText}>{title}</Text>
            }
        </TouchableOpacity>
    );
}

export default FormButton;

const styles = StyleSheet.create({

    button: {
        backgroundColor: theme.Colors.primary,
        borderRadius: Constants.ResponsiveSize.f30,
        height: Constants.ResponsiveSize.f70,
        width: '100%',
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

    },
    buttonText: {
        ...theme.Fonts?.Main.title,
        color: "white"
    }

})
