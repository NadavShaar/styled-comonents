import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withTheme } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Icon from './../../icons';

BaseButton.propTypes = {
    size: PropTypes.string
};

BaseButton.defaultProps = {
    size: 'sm'
};

function BaseButton(props) {

    const classes = useStyles(props);

    const { children, className, size, iconProps, ...rest } = props;

    let iconColorProp = {}; 
    if(props.variant !== 'contained' && props.color) iconColorProp = {color: props.theme.palette[props.color].main};

    return (
        <Button { ...rest } className={`${classes.root} + ${className}`}>
            { iconProps ? <Icon { ...iconProps } { ...iconColorProp } className={`${classes.icon} ${iconProps.className || ''}`} /> : null }
            { children }
        </Button>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: props => theme.custom.sizes.buttons[props.size].fontSize,
        height: 'fit-content'
    },
    icon: {
        marginRight: 5
    }
}));

export default withTheme(BaseButton);