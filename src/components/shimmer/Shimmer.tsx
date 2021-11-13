import React from 'react';
import { StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)


const TasksShimmer = () => {

    return (
        <ShimmerPlaceholder />
    )
}

const styles = StyleSheet.create({

})
export default TasksShimmer;