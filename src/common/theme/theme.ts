import {Platform} from 'react-native';
import Constants from '../constants';
import {themeType} from './types';

export const theme: themeType = {
  Colors: {
    primary: '#8E20E1',
    primaryDark: '#007367',
    primaryLight: '#DBF1CD',
    secondary: '#40968D',
    inactive: '#818C981A',
    active: '#6DBE4B',
    error: '#F0385E',
    text: '#333F48',
    textSecondary: '#A1AABB',
    textTitle: '#333F48',
    icon: '#FFFFFF',
    iconBackground: '#A1AABB',
    borders: '#D0D4DD',
  },

  Fonts: {
    Main: {
      header: {
        fontFamily: Constants.English_Font_Family,
        fontSize: Constants.ResponsiveSize.f25,
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
      },
      body: {
        fontFamily: Constants.English_Font_Family,
        fontSize: Constants.ResponsiveSize.f16,
        fontWeight: '400',
      },
      button: {
        fontFamily: Constants.English_Font_Family,
        fontSize: Constants.ResponsiveSize.f16,
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
      },
      title: {
        fontFamily: Constants.English_Font_Family,
        fontSize: Constants.ResponsiveSize.f20,
        fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
      },
      subtitles: {
        fontFamily: Constants.English_Font_Family,
        fontSize: Constants.ResponsiveSize.f12,
        fontWeight: 'bold',
      },
      captions: {
        fontFamily: Constants.English_Font_Family,
        fontSize: Constants.ResponsiveSize.f10,
        fontWeight: '400',
      },
    },
  },
};
