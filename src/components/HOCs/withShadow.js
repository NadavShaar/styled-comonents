import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

export default function(WrappedComponent){

    WithShadow.propTypes = {
        shadow: PropTypes.oneOf([1,2,3,4,5])
    };

    function WithShadow(props){
        let { shadow, className='', classes, ...rest } = props;

        if(shadow) className = `${classes.root} ${className}`;

        return <WrappedComponent className={className} { ...rest } />;
    }
    
    const useStyles = theme => ({
        root: { boxShadow: props => theme.custom.shadows[props.shadow] }
    });
    
    return withStyles(useStyles)(WithShadow);
};