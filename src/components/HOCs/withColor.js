import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createMuiTheme, withTheme } from '@material-ui/core/styles';

export default function(WrappedComponent){

    WithColor.propTypes = {
        color: PropTypes.string
    };

    function WithColor(props){
        let { color, theme, ...rest } = props;

        if(color && color !== 'primary' && color !== 'secondary'){
            theme = createMuiTheme({
                ...theme,
                palette: {
                    ...theme.palette,
                    primary: theme.palette[color]
                }
            });

            return (
                <ThemeProvider theme={theme}>
                    <WrappedComponent color='primary' {...rest}/>
                </ThemeProvider>
            )
        }

        return <WrappedComponent color={color} { ...rest } />;
    }
    
    return withTheme(WithColor);
};