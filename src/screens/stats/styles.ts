import {StyleSheet} from 'react-native';
import Constants from '../../common/constants';
import {theme} from '../../common/theme/theme';

const {Colors} = theme;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    paddingHorizontal: Constants.ResponsiveSize.f20,
  },
});
