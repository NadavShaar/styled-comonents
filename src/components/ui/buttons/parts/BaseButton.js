import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, withTheme } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import Icon from './../../icons';

BaseButton.propTypes = {
    size: PropTypes.string,
    color: PropTypes.string
};

BaseButton.defaultProps = {
    size: 'sm',
    color: 'secondary'
};

function BaseButton(props) {

    const { children, className, size, iconProps, theme, ...rest } = props;

    const classes = useStyles(props);


    return (
        <Button { ...rest } className={clsx([classes.root, className])}>
            { iconProps ? <Icon { ...iconProps } className={clsx([classes.icon, iconProps.className])} /> : null }
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
        marginRight: 5,
        color: props => (props.variant !== 'contained' && props.color) ? props.theme.palette[props.color].main : theme.palette[props.color].contrastText
    }
}));

export default withTheme(BaseButton);