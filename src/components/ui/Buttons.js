import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';
import { lighten } from './../../utils/colors';
import Icon from './Icons';
import withShadow from '../HOCs/withShadow.js';

// ==============================================================================================================
// BaseButton
// ==============================================================================================================

function BaseButton(props) {

  const { children, iconProps, color, size, ...rest } = props;

  return (
    <MuiButton { ...rest } >
      {
        iconProps
          ? <Icon { ...iconProps } />
          : null
      }
      { children }
    </MuiButton>
  )
};

BaseButton.propTypes = {
  iconProps: PropTypes.object,
  color: PropTypes.string,
  styles: PropTypes.object,
  size: PropTypes.number,
};

BaseButton.defaultProps = {
  styles: {}
};

const StyledBaseButton = styled(BaseButton)`
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

// ==============================================================================================================
// OutlineButton
// ==============================================================================================================

const StyledOutlineButton = styled(StyledBaseButton)`
  background-color: ${props => props.theme.colors.color1};
  color: ${props => props.color || props.theme.colors.secondary};
  border: ${props => `1px solid ${props.color || props.theme.colors.secondary}`};
  &:hover {
    background-color: ${props => lighten(props.color || props.theme.colors.secondary, .9)};
  }
`;

// ==============================================================================================================
// IconButton
// ==============================================================================================================

const StyledIconButton = styled(({children, ...rest}) => <StyledBaseButton { ...rest } />)`
  min-width: ${props => `${props.size}px`};
  max-width: ${props => `${props.size}px`};
  min-height: ${props => `${props.size}px`};
  max-height: ${props => `${props.size}px`};
  border-radius: 50%;
  padding: 0px;
`;

StyledIconButton.propTypes = {
  iconProps: PropTypes.object.isRequired,
};

StyledIconButton.defaultProps = {
  iconProps: {},
  size: 30
};

// ==============================================================================================================
// EXPORT Button
// ==============================================================================================================

function Button(props) {
  const { preset, ...rest } = props;

  switch (preset) {
    case 'outline': return <StyledOutlineButton { ...rest} />;
    case 'icon': return <StyledIconButton { ...rest} />;
    default: return <StyledBaseButton { ...rest} />;
  }
};

export default withShadow(Button);