import { createMuiTheme } from '@material-ui/core/styles';
import { shadows, sizes } from './shared';

const lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#3f71b5',
            contrastText: '#fff',
        },
        secondary: {
            main: '#e5679e',
            contrastText: '#fff',
        },
        customColor: {
            main: '#23a283',
        },
    },
    custom: {
        colors: {
            primary: "#3f71b5",
            secondary: "#e5679e",
            color1: "#fff",
            color2: "#000",
            color3: '#93acc3',
            color4: '#414141',
            color5: '#23a283',
        },
        backgrounds: {
            color1: "aliceblue",
            color2: "#fff",
        },
        shadows,
        sizes
    }
});

export default lightTheme;