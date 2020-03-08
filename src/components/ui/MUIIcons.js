import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        fontSize: props => props.size,
        width: props => props.size,
        height: props => props.size,
        color: props => props.color || theme.colors.color1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

function BaseIcon(props) {
    const classes1 = useStyles(props);

    const { iconClass, iconName, color, size, children, className, classes, ...rest } = props;

    return <i className={`${iconClass} ${className} ${classes1.root}`} {...rest}>{iconName}</i>;
}

const useStyles1 = makeStyles(theme => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: props => props.wrapperSize,
        height: props => props.wrapperSize,
        backgroundColor: props => props.color || theme.colors.secondary
    },
    base: {}
}));

function RoundIcon(props) {
    const classes2 = useStyles1(props);

    const { iconClass, iconName, color, size, className, baseIconProps, classes, ...rest } = props;

    return (
        <div className={`${className} ${classes2.root}`} {...rest}>
            <BaseIcon size={size} iconClass={iconClass} iconName={iconName} classes={{root: classes2.base}} {...baseIconProps}></BaseIcon>
        </div>
    );
}

const SocialIcon = withStyles(theme => ({
    root: {
        borderRadius: '50%'
    },
    base: {}
}))(RoundIcon)

const useStyles2 = withStyles(theme => ({
    root: {
        backgroundColor: 'pink'
    },
    base: {}
}));

class ClassIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
    
        return (
            <RoundIcon {...this.props} />
        )
    }
}

const StyledClassIcon = useStyles2(ClassIcon);

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

export default function Icon(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        // case 'gender': return ;
        case 'social': return <SocialIcon { ...rest} />;
        case 'class': return <StyledClassIcon { ...rest} />;
        default: return <BaseIcon { ...rest} />;
    }
};