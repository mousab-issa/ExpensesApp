import React, { FC, useState } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
//Redux 
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { SignUpUser } from '../../redux/auth/asyncActions';
// Type definition
import { Props } from './types';
// styles 
import styles from './styles';
//common 
import Constants from '../../common/constants';
import langauges from '../../common/langauges';
import { theme } from '../../common/theme/theme';
// components
import FormButton from '../../components/Forms/form-button/FormButton';
import LineText from '../../components/Forms/line-text/LineText';
import FormTextInput from '../../components/Forms/text-input/FormTextInput';
import BackHeader from '../../components/backHeader/backHeader';

const SignUpScreen: FC<Props> = ({ navigation }) => {
    // State
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    // Redux 
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.authSlice.isLoading);

    const onSignup = () => {
        try {
            return dispatch(SignUpUser({ email, password, phone, name }));
        } catch (e) { }

    }

    const onLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: "center" }}>
                <BackHeader iconName={'arrow-left'} title={langauges.Signup} />
            </View>
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                    flex: 1,
                }}>

                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginBottom: 20 }}>
                        <View style={{ marginVertical: Constants.ResponsiveSize.f10 }}>
                            <FormTextInput label={langauges.email} placeHolder={langauges.passInstruction} onTextChange={(text) => setEmail(text)} />
                        </View>
                        <View style={{ marginVertical: Constants.ResponsiveSize.f10 }}>
                            <FormTextInput label={langauges.password} placeHolder={langauges.passInstruction} password onTextChange={(text) => setPassword(text)} />
                        </View>
                        <View style={{ marginVertical: Constants.ResponsiveSize.f10 }}>
                            <FormTextInput label={langauges.name} placeHolder={langauges.passInstruction} onTextChange={(text) => setName(text)} />
                        </View>
                        <View style={{ marginVertical: Constants.ResponsiveSize.f10 }}>
                            <FormTextInput label={langauges.phone} placeHolder={langauges.passInstruction} onTextChange={(text) => setPhone(text)} />
                        </View>
                        <View style={{ marginVertical: Constants.ResponsiveSize.f10 }}>
                            <FormButton backgroundColor={theme.Colors.primary} title={langauges.Signup} onPress={onSignup} loading={isLoading} disbaled={name.length < 1 || password.length < 1 || email.length < 1 || phone.length < 1} />
                        </View>
                        <LineText textColor={theme.Colors.iconBackground} text={langauges.OrSignup} lineColor={"#E2E3E8"} />
                        <View style={{ marginVertical: Constants.ResponsiveSize.f10 }}>
                            <FormButton backgroundColor={theme.Colors.primaryDark} title={langauges.Login} onPress={onLogin} />
                        </View>
                    </View>


                    <View style={{ flex: 1, flexDirection: 'row' }}></View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}

export default SignUpScreen;



