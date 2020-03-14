import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withTheme } from '@material-ui/styles';
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

    let { children, size, inverted, className, iconProps, ...rest } = props;

    if(props.inverted) className = `${className} ${classes.rootInverted}`
    else className = `${className} ${classes.root}`

    return (
        <MUIIconButton { ...rest } className={className}>
            <Icon size={props.theme.custom.sizes.buttons[props.size].fontSize} color='primary' className={inverted ? classes.icon : ''} { ...iconProps } />
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
        color: theme.custom.colors.color1
    }
}));

export default withTheme(IconButton);