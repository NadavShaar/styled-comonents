import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';


BaseIcon.propTypes = {
    iconClass: PropTypes.string,
    iconName: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    className: PropTypes.string
};

BaseIcon.defaultProps = {
    size: 24,
    className: ''
};

function BaseIcon(props) {
    const classes1 = useStyles(props);

    const { iconClass, iconName, color, size, children, className, classes, ...rest } = props;

    return <i className={`${iconClass} ${className} ${classes1.root}`} {...rest}>{iconName}</i>;
}

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: props => props.size,
        width: props => props.size,
        height: props => props.size,
        color: props => props.color || theme.custom.colors.color1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

export default BaseIcon;