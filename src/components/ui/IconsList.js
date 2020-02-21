import React from 'react';
import styled from 'styled-components';
import Icon from '../ui/Icons';

const IconsListWrapper = styled.div`
    display: inline-flex;
    min-width: ${props => props.isLoading ? '150px' : 'unset'};
    min-height: ${props => props.isLoading ? '20px' : 'unset'};
    background-color: ${props => props.isLoading ? `${props.theme.skeleton.light} !important` : 'unset'};
    ${props => props.styles};
`;

const IconsleftOversCount = styled.span`
    font-size: 14px;
    font-weight: 500;
    ${props => props.countStyle};
`;

function IconsList(props) {

    const { isLoading, visibleCount, styles={}, countStyle={}, icons=[], iconProps } = props;


        const visibleIcons = icons.slice(0, visibleCount);
        const leftOversCount = icons.length - visibleCount;

    return (
        <IconsListWrapper styles={styles} isLoading={isLoading}>
            {
                isLoading ?
                    null
                    :
                    <>
                        {visibleIcons.map((ic, idx) => (
                            <Icon 
                                key={idx}
                                iconClass={ic.iconClass} 
                                iconName={ic.iconName} 
                                color={ic.color} 
                                { ...iconProps }
                            />
                        ))}
                        <IconsleftOversCount countStyle={countStyle}>
                            {leftOversCount > 0 ? `+${leftOversCount}` : null}
                        </IconsleftOversCount>
                    </>
            }
        </IconsListWrapper>  
    )
}

export default IconsList;