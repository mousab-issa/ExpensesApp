import {StyleProp} from 'react-native';

interface FontFamilyType {
  Main: {
    header: StyleProp<any>;
    body: StyleProp<any>;
    button: StyleProp<any>;
    title: StyleProp<any>;
    subtitles: StyleProp<any>;
    captions: StyleProp<any>;
  };
}

interface ColorsType {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  secondary: string;
  error: string;
  borders: string;
  active: string;
  inactive: string;
  text: string;
  textSecondary: string;
  textTitle: string;
  icon: string;
  iconBackground: string;
}

// Theme Type
interface themeType {
  Colors: ColorsType;
  Fonts?: FontFamilyType;
}
