import { Rubik_400Regular, Rubik_600SemiBold, Rubik_700Bold, useFonts } from '@expo-google-fonts/rubik';
import Metrics from './metrix';

const fonts = {
    regular: 'Rubik_400Regular',
    semiBold: 'Rubik_600SemiBold',
    bold: 'Rubik_700Bold'
};

const colors = {
    primary: '#ffbf1a',
    secondary: '#502275;',
    textPrimary: '#2B2B2B',
    borderColor: '',
    white: '#fff',
    black: '#000',
    grey: '',
    background: '#E9E9E9'
};

const size = {
    font6: Metrics.screenWidth * (6 / 365),
    font8: Metrics.screenWidth * (8 / 365),
    font10: Metrics.screenWidth * (10 / 365),
    font12: Metrics.screenWidth * (12 / 365),
    font14: Metrics.screenWidth * (14 / 365),
    font16: Metrics.screenWidth * (16 / 365),
    font18: Metrics.screenWidth * (18 / 365),
    font20: Metrics.screenWidth * (20 / 365),
}

export default { fonts, colors, size };