import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { lighten } from './../../utils/colors';
import Icon from './Icons';
import withElevation from '../HOCs/withElevation.js';

const StyledButton = styled(class ColorButton extends React.Component {
    static propTypes = {
        color: PropTypes.string,
    }
    render(){
        const { color, style, ...rest } = this.props;
        return (
            <Button { ...rest } />
        )
    }
})`
  background-color: ${props => props.color || props.theme.colors.secondary};
  color: ${props => props.theme.colors.color1};
  font-size: 13px;
  text-transform: capitalize;
  padding: 3px 15px;
  border-radius: 15px;
  font-weight: 400;
  white-space: nowrap;
  ${props => props.style}
  &:hover {
    background-color: ${props => lighten(props.color || props.theme.colors.secondary, .15)};
  }
`;

const OutlineButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.color1};
  color: ${props => props.color || props.theme.colors.secondary};
  border: ${props => `1px solid ${props.color || props.theme.colors.secondary}`};
  &:hover {
    background-color: ${props => lighten(props.color || props.theme.colors.secondary, .9)};
  }
`;

const IconButton = styled(class IconButton extends React.Component {
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
})`
  min-width: ${props => `${props.size}px`};
  max-width: ${props => `${props.size}px`};
  min-height: ${props => `${props.size}px`};
  max-height: ${props => `${props.size}px`};
  border-radius: 50%;
  padding: 0px;
`;

export default withElevation(function PresetButton(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        case 'outline': return <OutlineButton { ...rest} />;
        case 'icon': return <IconButton { ...rest} />;
        default: return <StyledButton { ...rest} />;
    }
});