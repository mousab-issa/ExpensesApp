import React, { FC } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
// 
import Constants from '../../../common/constants'
import { theme } from '../../../common/theme/theme'

interface Props {
    onTextChange?: (text: string) => void
    label: string;
    placeHolder?: string;
    password?: boolean;
    type?: string;
}

const FormTextInput: FC<Props> = ({ onTextChange, label, placeHolder, password, type }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                keyboardType={type === 'number' ? 'number-pad' : 'ascii-capable'}
                secureTextEntry={password || false}
                style={styles.textInput}
                onChangeText={onTextChange}
                placeholder={placeHolder}
                placeholderTextColor={theme.Colors.textSecondary} />
        </View>
    )
}

export default FormTextInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    textInput: {
        backgroundColor: '#FAFAFA',
        borderRadius: 15,
        borderColor: theme.Colors.inactive,
        borderWidth: 1.5,
        height: Constants.ResponsiveSize.f60,
        width: '100%',
        paddingHorizontal: Constants.ResponsiveSize.f10,
        marginVertical: 10,
    },
    label: {
        ...theme.Fonts?.Main.title,
        paddingHorizontal: Constants.ResponsiveSize.f5,
    },
})
