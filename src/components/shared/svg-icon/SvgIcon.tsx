
import React, { FC } from 'react';
import { Text, StyleSheet } from 'react-native';
// Icons
import Track from '../../../../assets /images /svg/track.svg';
import Home from '../../../../assets /images /svg/home.svg';
import Add from '../../../../assets /images /svg/add.svg';
import Chart from '../../../../assets /images /svg/chart.svg';
import Exclamation from '../../../../assets /images /svg/exclamation.svg';

interface Props {
    name: string;
    size: number;
};


const SvgIcon: FC<Props> = ({ name, size }) => {
    switch (name) {
        case "Track":
            return <Track width={size} height={size} />
        case "Add":
            return <Add width={100} height={100} />
        case "Chart":
            return <Chart width={size} height={size} />
        case "Home":
            return <Home width={100} height={100} />
        default:
            return <Exclamation width={100} height={100} />
    }
}


export default SvgIcon;

const styles = StyleSheet.create({})
