import React from 'react';
import styled from 'styled-components';

const IconsListWrapper = styled.div`
    display: inline-flex;
    ${props => props.styles};
`;

const IconsleftOversCount = styled.span`
    font-size: 14px;
    font-weight: 500;
    ${props => props.countStyle};
`;

function IconsList(props) {

    const { children, visibleCount, styles={}, countStyle={} } = props;
    const visibleIcons = children.slice(0, visibleCount);
    const leftOversCount = children.length - visibleCount;

    return (
        <IconsListWrapper styles={styles}>
            {visibleIcons}
            <IconsleftOversCount countStyle={countStyle}>
                {leftOversCount > 0 ? `+${leftOversCount}` : null}
            </IconsleftOversCount>
        </IconsListWrapper>  
    )
}

export default IconsList;