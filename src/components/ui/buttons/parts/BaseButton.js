import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import{ Button } from '@material-ui/core';

BaseButton.propTypes = {
    size: PropTypes.string
};

BaseButton.defaultProps = {
    size: 'sm'
};

function BaseButton(props) {

    const classes = useStyles(props);

    const { children, className, size, ...rest } = props;

    return <Button { ...rest } className={`${classes.root} + ${className}`}>{ children }</Button>;
}

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: props => theme.custom.sizes.buttons[props.size].fontSize,
        height: 'fit-content'
    }
}));

export default BaseButton;