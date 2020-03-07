import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

function BaseIcon(props) {

    const { iconClass, iconName, color, size, children, className, classes, ...rest } = props;

    return <i className={`${iconClass} ${className} ${classes.root}`} {...rest}>{iconName}</i>;
}

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


const StyledIcon = withStyles(theme => ({
    root: {
        fontSize: props => props.size,
        width: props => props.size,
        height: props => props.size,
        color: props => props.color || theme.colors.color1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}))(BaseIcon);

export default function Icon(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        // case 'gender': return ;
        // case 'social': return ;
        default: return <StyledIcon { ...rest} />;
    }
};