import React, { FC } from 'react';
//Redux 
import { useAppDispatch } from '../../redux/hooks';
import styles from './styles';
// Type definition
import { Props } from './types';
// components
import CustomLottieIcon from '../../components/shared/animated-icon/animated-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const Splash: FC<Props> = ({
    navigation
}) => {
    return (
        <SafeAreaView style={styles.container}>
            <CustomLottieIcon start={true} name={'LoadingAnimationSquare'} />
        </SafeAreaView>
    )
}

export default Splash;



