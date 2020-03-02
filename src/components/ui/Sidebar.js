import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledSidebar = styled.div`
    height: 100%;
    width: ${props => `${props.size}px`};
    box-shadow: 0 0 4px 0 rgba(0,0,0,0.4);
    position: absolute;
    top: 0px;
    bottom: 0px;
    ${props => props.styles};
`;

StyledSidebar.propTypes = {
    size: PropTypes.number,
    styles: PropTypes.object
};
  
StyledSidebar.defaultProps = {
    size: 350,
    styles: {}
};

const LeftSidebar = styled(StyledSidebar)`
    left: 0px;
`;

const RightSidebar = styled(StyledSidebar)`
    right: 0px;
`;

function Sidebar(props) {
    const { preset, ...rest } = props;
  
    switch (preset) {
        case 'left': return <LeftSidebar { ...rest} />;
        case 'right': return <RightSidebar { ...rest} />;
        default: return <LeftSidebar { ...rest} />;
    }
};

export default Sidebar;