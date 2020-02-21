import React from 'react';
import styled from 'styled-components';

const defaultIconSize = 24;
const defaultWrapperSize = 30;

const StyledIcon = styled.i.attrs(props => ({
    className: props.iconClass,
    children: props.iconName
}))`
    font-size: ${props => `${props.size || defaultIconSize}px`};
    width: ${props => `${props.size || defaultIconSize}px`};
    height: ${props => `${props.size || defaultIconSize}px`};
    color: ${props => props.color || props.theme.colors.color1};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    ${props => props.styles || {}};
`;

const StyledSocialIcon = styled.div`
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: ${props => `${props.wrapperSize || defaultWrapperSize}px`};
    height: ${props => `${props.wrapperSize || defaultWrapperSize}px`};
    background-color: ${props => props.color || props.theme.colors.secondary};
    ${props => props.styles || {}};
`;

const BaseIcon = StyledIcon;

function SocialIcon(props) {

    const { iconClass, iconName, color, size, wrapperSize, iconStyle={}, styles={}, ...rest } = props;

    return (
        <StyledSocialIcon wrapperSize={wrapperSize} color={color} styles={styles}>
            <StyledIcon iconClass={iconClass} iconName={iconName} size={size} color='#fff' iconStyle={iconStyle} { ...rest } /> 
        </StyledSocialIcon>
    )
}

function GenderIcon(props) {

    const { gender, color, size, styles={}, ...rest} = props;
    const genderConfig = {
        male: {iconClass: 'fa fa-mars', iconName: ''},
        female: {iconClass: 'fa fa-venus', iconName: ''}
    }

    return <StyledIcon iconClass={genderConfig[gender].iconClass} iconName={genderConfig[gender].iconName} size={size} color={color} styles={styles} { ...rest } />;
}

export default function Icon(props) {
  const { preset, iconProps, ...rest } = props;

  switch (preset) {
    case 'social': return SocialIcon({...iconProps, ...rest});
    case 'gender': return GenderIcon({...iconProps, ...rest});
    default: return <BaseIcon  {...rest} />;
  }
};
