import React, { FC, useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//Redux 
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { LoginUser } from '../../redux/auth/asyncActions';
// Type definition
import { Props } from './types';
// styles 
import styles from './styles';
//common 
import Constants from '../../common/constants';
import langauges from '../../common/langauges';
import { theme } from '../../common/theme/theme';
// components
import SvgIcon from '../../components/shared/svg-icon/SvgIcon';
import FormButton from '../../components/Forms/form-button/FormButton';
import LineText from '../../components/Forms/line-text/LineText';
import FormTextInput from '../../components/Forms/text-input/FormTextInput';

const Login: FC<Props> = ({ navigation }) => {
    // State
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    // Redux 
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.authSlice.isLoading);


    const onLogin = async () => {
        try {
            return dispatch(LoginUser({ email: username, password: password }));
        } catch (e) { }
    }
    const onSignup = () => {
        navigation.navigate('SignUp')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <SvgIcon name="Logo" size={Constants.ResponsiveSize.f130} />
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{
                    flex: 1,
                }}>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: "center", justifyContent: 'flex-start' }}>
                        <View style={{ flexDirection: "column", justifyContent: "flex-start" }}>
                            <Text style={{
                                ...theme.Fonts?.Main.header,
                                textAlign: "left"
                            }}>{langauges.hey}</Text>
                            <Text style={{
                                ...theme.Fonts?.Main.header
                            }}>{langauges.login}</Text>
                        </View>
                    </View>

                    <View style={{ flex: 2.5, flexDirection: 'column', justifyContent: 'center', marginBottom: 20 }}>
                        <FormTextInput label={langauges.email} placeHolder={langauges.pleaseEnterUserName} onTextChange={(text) => setUsername(text)} />
                        <View style={{ marginTop: Constants.ResponsiveSize.f30 }}>
                            <FormTextInput label={langauges.password} placeHolder={langauges.passInstruction} password onTextChange={(text) => setPassword(text)} />
                        </View>
                    </View>

                    <View style={{ flex: 2, flexDirection: 'column', justifyContent: "space-between" }}>
                        <FormButton backgroundColor={theme.Colors.primary} title={langauges.Login} onPress={onLogin} loading={isLoading} disbaled={username.length < 1 || password.length < 1} />
                        <LineText textColor={theme.Colors.iconBackground} text={langauges.OrSignup} lineColor={"#E2E3E8"} />
                        <FormButton backgroundColor={theme.Colors.primaryDark} title={langauges.Signup} onPress={onSignup} />
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default Login;



