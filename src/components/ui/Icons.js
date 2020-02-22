import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// ==============================================================================================================
// STYLED ELEMENTS
// ==============================================================================================================

const StyledIcon = styled.i.attrs(props => ({
    className: props.iconClass,
    children: props.iconName
}))`
    font-size: ${props => `${props.size}px`};
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    color: ${props => props.color || props.theme.colors.color1};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${props => props.styles};
`;

const StyledSocialIcon = styled.div`
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.wrapperSize}px`};
    height: ${props => `${props.wrapperSize}px`};
    background-color: ${props => props.color || props.theme.colors.secondary};
    ${props => props.styles};
`;

const BaseIcon = StyledIcon;

BaseIcon.propTypes = {
    iconClass: PropTypes.string,
    iconName: PropTypes.string,
    size: PropTypes.number,
    styles: PropTypes.object
};

BaseIcon.defaultProps = {
    size: 24,
    styles: {}
};

// ==============================================================================================================
// COMPONENTS
// ==============================================================================================================

function SocialIcon(props) {

    const { iconClass, iconName, color, size, wrapperSize, iconStyle, styles, ...rest } = props;

    return (
        <StyledSocialIcon wrapperSize={wrapperSize} color={color} styles={styles}>
            <StyledIcon iconClass={iconClass} iconName={iconName} size={size} color='#fff' iconStyle={iconStyle} { ...rest } /> 
        </StyledSocialIcon>
    )
}

SocialIcon.propTypes = {
    iconClass: PropTypes.string,
    iconName: PropTypes.string,
    size: PropTypes.number,
    wrapperSize: PropTypes.number,
    styles: PropTypes.object,
    iconStyle: PropTypes.object,
};

SocialIcon.defaultProps = {
    size: 24,
    wrapperSize: 30,
    styles: {},
    iconStyle: {},
};

function GenderIcon(props) {

    const { gender, color, size, styles, ...rest} = props;

    if(!gender) return null;

    const genderConfig = {
        male: {iconClass: 'fa fa-mars', iconName: ''},
        female: {iconClass: 'fa fa-venus', iconName: ''}
    }

    return <StyledIcon iconClass={genderConfig[gender].iconClass} iconName={genderConfig[gender].iconName} size={size} color={color} styles={styles} { ...rest } />;
}

GenderIcon.propTypes = {
    iconClass: PropTypes.string,
    iconName: PropTypes.string,
    gender: PropTypes.string,
    size: PropTypes.number,
    styles: PropTypes.object,
};

GenderIcon.defaultProps = {
    size: 24,
    gender: null,
    styles: {}
};

// ==============================================================================================================
// EXPORTS
// ==============================================================================================================

export default function Icon(props) {
  const { preset, iconProps, ...rest } = props;

  switch (preset) {
    case 'social': return SocialIcon({...iconProps, ...rest});
    case 'gender': return GenderIcon({...iconProps, ...rest});
    default: return <BaseIcon  {...rest} />;
  }
};
