import React, { FC } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Constants from '../../../common/constants'
import { theme } from '../../../common/theme/theme'

interface Props {
    text: string;
    lineColor: string;
    textColor: string;

}

const LineText: FC<Props> = ({ text, lineColor, textColor }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={[styles.line, { backgroundColor: lineColor }]} />
            <Text style={[styles.text, { color: textColor }]}>{text}</Text>
            <View style={[styles.line, { backgroundColor: lineColor, }]} />
        </View>
    )
}

export default LineText;

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        alignSelf: 'center'
    },
    text: {
        ...theme.Fonts?.Main.subtitles,
        alignSelf: 'center',
        paddingHorizontal: 5,
    }


})
