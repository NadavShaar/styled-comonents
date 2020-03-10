import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import BaseIcon from './BaseIcon';

const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: props => props.size + props.gap,
        height: props => props.size + props.gap,
        backgroundColor: props => props.color || theme.colors.secondary
    },
    base: {}
}));

function RoundIcon(props) {
    const classes2 = useStyles(props);

    const { iconClass, iconName, color, size, className, baseIconProps, classes, ...rest } = props;

    return (
        <div className={`${className} ${classes2.root}`} {...rest}>
            <BaseIcon size={size} iconClass={iconClass} iconName={iconName} classes={{root: classes2.base}} {...baseIconProps}></BaseIcon>
        </div>
    );
}

export default RoundIcon;

RoundIcon.propTypes = {
    iconClass: PropTypes.string,
    iconName: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    circleSize: PropTypes.number,
    className: PropTypes.string
};

RoundIcon.defaultProps = {
    size: 24,
    circleSize: 30,
    gap: 5,
    className: ''
};