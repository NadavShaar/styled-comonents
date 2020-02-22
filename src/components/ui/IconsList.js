import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../ui/Icons';

const IconsListWrapper = styled.div.attrs(props => ({
    className: props.isLoading ? `${props.className} skeleton skeleton_line` : props.className
}))`
    display: inline-flex;
    overflow: hidden;
    position: relative;
    ${props => props.styles}
    ${props => props.skeletonStyle}
`;

const IconsleftOversCount = styled.span`
    font-size: 14px;
    font-weight: 500;
    ${props => props.countStyle};
`;

function IconsList(props) {

    const { isLoading, visibleCount, styles, countStyle, icons, iconProps, skeletonStyle } = props;

    const visibleIcons = icons.slice(0, visibleCount);
    const leftOversCount = icons.length - visibleCount;

    return (
        <IconsListWrapper styles={styles} isLoading={isLoading} skeletonStyle={skeletonStyle}> 
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

IconsList.propTypes = {
    isLoading: PropTypes.bool,
    visibleCount: PropTypes.number,
    styles: PropTypes.object,
    countStyle: PropTypes.object,
    icons: PropTypes.array, 
    iconProps: PropTypes.object, 
    skeletonStyle: PropTypes.object
};

IconsList.defaultProps = {
    isLoading: undefined,
    visibleCount: 5,
    styles: {},
    countStyle: {},
    icons: [], 
    iconProps: {}, 
    skeletonStyle: {}
};

export default IconsList;