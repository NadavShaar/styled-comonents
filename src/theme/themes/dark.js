import { createMuiTheme } from '@material-ui/core/styles';
import { shadows, sizes } from './shared';

const darkTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#d4af38',
            contrastText: '#414141',
        },
        secondary: {
            main: '#f38d18',
            contrastText: '#414141',
        },
        customColor: {
            main: '#95e422'
        }
        },
        custom: {
        colors: {
            primary: "#d4af38",
            secondary: "#f38d18",
            color1: "#fff",
            color2: "#000",
            color3: '#929292',
            color4: '#c1c1c1',
            color5: '#95e422'
        },
        backgrounds: {
            color1: '#2f2f2f',
            color2: "#545454"
        },
        shadows,
        sizes
    }
});

export default darkTheme;