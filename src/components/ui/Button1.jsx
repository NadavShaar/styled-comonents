import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { lighten } from '../../utils/colors';
import Icon from './Icons';
import withElevation from '../HOCs/withElevation.js';

const ColorButton = withStyles(theme => ({
    root: {
        backgroundColor: props => props.color || theme.colors.secondary,
        color: theme.colors.color1,
        fontSize: 13,
        textTransform: 'capitalize',
        padding: '3px 15px',
        borderRadius: 15,
        fontWeight: 400,
        whiteSpace: 'nowrap',
        '&:hover': {
            backgroundColor: props => lighten(props.color || theme.colors.secondary, .15)
        }
    }
}))(class ColorButton extends React.Component {
    static propTypes = {
        color: PropTypes.string,
    }
    render(){
        const { color, ...rest } = this.props;
        return (
            <Button { ...rest } />
        )
    }
})

const OutlineButton = withStyles(theme => ({
    root: {
        backgroundColor: props => theme.colors.color1,
        color: props => props.color || theme.colors.secondary,
        border: props => `1px solid ${props.color || theme.colors.secondary}`,
        '&:hover': {
            backgroundColor: props => lighten(props.color || theme.colors.secondary, .9)
        }
    }
}))(ColorButton)

const IconButton = withStyles(theme => ({
    root: {
        minWidth: props => props.size,
        maxWidth: props => props.size,
        minHeight: props => props.size,
        maxHeight: props => props.size,
        borderRadius: '50%',
        padding: 0,
    }
}))(class IconButton extends React.Component {
    static propTypes = {
        size: PropTypes.string,
        iconProps: PropTypes.object
    }
    static defaultProps = {
        size: 30
    }
    render(){
        const { size, iconProps, children, ...rest } = this.props;
        return (
            <Button { ...rest } >
                <Icon { ...iconProps } />
                { children }
            </Button>
        )
    }
})

export default withElevation(function PresetButton(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        case 'outline': return <OutlineButton { ...rest} />;
        case 'icon': return <IconButton { ...rest} />;
        default: return <ColorButton { ...rest} />;
    }
});