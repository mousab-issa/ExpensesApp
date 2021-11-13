
import React, { useRef, useEffect, FC } from 'react';
import { Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Constants from '../../../common/constants';

interface Props {
    start: boolean,
    name: string,
    size?: number
};

const CustomLottieIcon: FC<Props> = ({ start, name, size }) => {
    const gameRef = useRef<any>(null);

    const StartAnimation = () => {
        if (gameRef.current) {
            gameRef.current.play();
        }
    }

    const ResetAnimation = () => {
        gameRef.current.reset();
    }

    useEffect(() => {
        if (start) {
            StartAnimation();
        }
        else if (!start) {
            ResetAnimation();
        }

    }, [start])

    switch (name) {
        case 'LoadingAnimationSquare':
            return (
                <LottieView
                    style={{
                        height: Constants.ResponsiveSize.f120,
                        width: Constants.ResponsiveSize.f120
                    }}
                    source={require(`../../../../assets /lottie_animation/Loading_Animation.json`)}
                    ref={gameRef}
                />
            );
        default: return <Text>No Animated Icon found</Text>

    }


}


export default CustomLottieIcon;

