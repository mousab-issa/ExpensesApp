import {StyleSheet} from 'react-native';
import Constants from '../../common/constants';
import {theme} from '../../common/theme/theme';

const {Colors} = theme;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingHorizontal: Constants.ResponsiveSize.f28,
  },
  formWrapper: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: 30,
  },

  view: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  content: {
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  langCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 5,
    left: 0,
    height: Constants.ResponsiveSize.f40,
    width: Constants.ResponsiveSize.f40,
    borderRadius: Constants.ResponsiveSize.f40 / 2,
    backgroundColor: theme.Colors.primary,
    shadowColor: theme.Colors.primary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 10,
    marginBottom: 10,
  },
  langText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
