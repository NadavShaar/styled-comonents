import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { IconButton as MUIIconButton } from '@material-ui/core';
import { darken } from './../../../../utils';
import Icon from './../../icons/';

IconButton.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

IconButton.defaultProps = {
    size: 'md',
    color: 'primary'
};

function IconButton(props) {

    const classes = useStyles(props);

    let { children, size, inverted, className, theme, iconProps, ...rest } = props;

    if(props.inverted) className = clsx([className, classes.rootInverted]);
    else className = clsx([className, classes.root]);

    let iconClassNames = inverted ? clsx([classes.icon, iconProps.className]) : clsx([iconProps.className]);

    return (
        <MUIIconButton { ...rest } className={className}>
            <Icon size={props.theme.custom.sizes.buttons[props.size].fontSize} color='primary' className={iconClassNames} { ...iconProps } />
        </MUIIconButton>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        padding: props => theme.custom.sizes.buttons[props.size].padding,
    },
    rootInverted: {
        background: props => theme.palette[props.color].main,
        padding: props => theme.custom.sizes.buttons[props.size].padding,
        '&:hover': {
            background: props => darken(theme.palette[props.color].main, 0.3)
        }
    },
    icon: {
        color: props => theme.palette[props.color].contrastText
    }
}));

export default IconButton;