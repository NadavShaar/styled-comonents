import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

export default function(WrappedComponent){

    WithShadow.propTypes = {
        shadow: PropTypes.oneOf([1,2,3,4,5])
    };

    function WithShadow(props){
        let { shadow, className='', ...rest } = props;
        const classes = useStyles(props);
        
        if(shadow) className = clsx([classes.root, className]);

        return <WrappedComponent className={className} { ...rest } />;
    }
    
    const useStyles = makeStyles(theme => ({
        root: { boxShadow: props => theme.custom.shadows[props.shadow] }
    }));
    
    return WithShadow;
};