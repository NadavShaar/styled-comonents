import React from 'react';
import { withStyles, withTheme } from '@material-ui/styles';

const useStyles = theme => ({
    root: { boxShadow: props => props.shadow ? theme.custom.shadows[props.shadow] : 'unset' }
});

const withShadow = (WrappedComponent) => {

    const HOC = props => {
        const { shadow, className='', classes, ...rest } = props;

        return <WrappedComponent className={`${classes.root} ${className}`} { ...rest } />;
    }
    
    return withTheme(withStyles(useStyles)(HOC));
};

export default withShadow;