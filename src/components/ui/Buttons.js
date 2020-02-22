import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { lighten, darken } from './../../utils/colors';
import Icon from './Icons';

// ==============================================================================================================
// STYLED ELEMENTS
// ==============================================================================================================

const StyledButton = styled(({ color, fullWidth, size, ...rest }) => <MuiButton { ...rest } />)`
  background-color: ${props => props.color || props.theme.colors.secondary};
  color: ${props => props.theme.colors.color1};
  font-size: 13px;
  text-transform: capitalize;
  padding: 3px 15px;
  border-radius: 15px;
  font-weight: 400;
  white-space: nowrap;
  ${props => props.styles};
  &:hover {
    background-color: ${props => lighten(props.color || props.theme.colors.secondary, .15)};
  }
`;

const StyledOutlinedButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors.color1};
  color: ${props => props.color || props.theme.colors.secondary};
  border: ${props => `1px solid ${props.color || props.theme.colors.secondary}`};
  &:hover {
    background-color: ${props => lighten(props.color || props.theme.colors.secondary, .9)};
  }
`;

const StyledIconButton = styled(StyledButton)`
  padding: 0px;
`;

const animatedButtonSharedStyle = css`
  position: absolute;
  left: 0px;
  top: 0px;
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  line-height: ${props => `${props.size}px`};
  border-radius: ${props => `${props.size / 2}px`};
  background-color: ${props => props.color || props.theme.colors.secondary};
  box-shadow: ${props => props.theme.shadows.lvl1};
  transition: all .15s ease-in-out;
`;

const StyledAnimatedButton = styled.div`
  display: inline-block;
  position: relative;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.fullWidth}px`};

  .icon_wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
    ${props => animatedButtonSharedStyle};
    ${props => props.buttonStyles};

    i {
      transition: transform .15s ease-in-out;
      transform: rotate(0deg);
    }

    &:hover {
      background-color: ${props => darken(props.color || props.theme.colors.secondary, .3)};
    }

    &:hover ~ .label_container {
      width: ${props => `${props.fullWidth}px`};
    }

    &:hover ~ .label_container > .label{
      left: 0px;
    }

    &:hover i {
      transform: rotate(90deg);
    }

  }

  .label_container {
    display: block;
    overflow: hidden;
    z-index: 0;
    ${props => animatedButtonSharedStyle};
    ${props => props.labelContainerStyles || {}};

    .label {
      margin: ${props => `0px 8px 0px ${props.size + 8}px`};
      display: block;
      position: relative;
      left: ${props => `-${props.fullWidth - props.size + 8}px`};
      transition: all .15s ease-in-out;
      color: ${props => props.theme.colors.color1};
      ${props => props.labelStyles || {}};
    }

  }
`;

// ==============================================================================================================
// COMPONENTS
// ==============================================================================================================

function BaseButton(props) {

  const { children, iconProps, ...rest } = props;

  return (
    <StyledButton { ...rest } >
      {
        iconProps
          ? <Icon { ...iconProps } />
          : null
      }
      { children }
    </StyledButton>
  )
};

BaseButton.propTypes = {
  iconProps: PropTypes.object,
  color: PropTypes.string,
  styles: PropTypes.object
};

BaseButton.defaultProps = {
  iconProps: {},
  styles: {}
};

function OutlineButton(props) {

  const { children, iconProps, ...rest } = props;

  return (
    <StyledOutlinedButton { ...rest } >
      {
        iconProps
          ? <Icon { ...iconProps } />
          : null
      }
      {children}
    </StyledOutlinedButton>
  )
};

OutlineButton.propTypes = {
  iconProps: PropTypes.object,
  color: PropTypes.string,
  styles: PropTypes.object
};

OutlineButton.defaultProps = {
  iconProps: {},
  styles: {}
};

function IconButton(props) {

  const { iconProps, ...rest } = props;

  return (
    <StyledIconButton { ...rest }>
      <Icon { ...iconProps } />
    </StyledIconButton>
  )
};

IconButton.propTypes = {
  iconProps: PropTypes.object,
  color: PropTypes.string,
  styles: PropTypes.object
};

IconButton.defaultProps = {
  iconProps: {},
  styles: {}
};

function AnimatedButton(props) {

  const { children, iconProps, ...rest } = props;

  return (
    <StyledAnimatedButton { ...rest }>
      <IconButton className="icon_wrapper" { ...props }>
        <Icon { ...iconProps } />
      </IconButton>
      <div className="label_container">
        <span className="label">
          { children }
        </span>
      </div>
    </StyledAnimatedButton>
  )
};

AnimatedButton.propTypes = {
  iconProps: PropTypes.object,
  color: PropTypes.string,
  styles: PropTypes.object,
  fullWidth: PropTypes.number,
  buttonStyles: PropTypes.object,
  labelContainerStyles: PropTypes.object,
  labelStyles: PropTypes.object
};

AnimatedButton.defaultProps = {
  iconProps: {},
  styles: {},
  size: 30,
  fullWidth: 115,
  buttonStyles: {},
  labelContainerStyles: {},
  labelStyles: {}
};

// ==============================================================================================================
// EXPORTS
// ==============================================================================================================

export default function Button(props) {
  const { preset, ...rest } = props;

  switch (preset) {
    case 'outline': return OutlineButton(rest);
    case 'icon': return IconButton(rest);
    case 'animate': return AnimatedButton(rest);
    default: return BaseButton(rest);
  }
};